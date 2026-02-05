import MagicString from "magic-string";
import { parseSync, Visitor } from "oxc-parser";

/**
 * Simple builder-like interface for backward compatibility
 */
export const builders = {
  stringLiteral: (value: string) => JSON.stringify(value),
  identifier: (name: string) => name,
  callExpression: (callee: string, args: string[]) =>
    args.length > 0 ? `${callee}(${args.join(", ")})` : `${callee}()`,
};

export type ValueGenerator = (b: typeof builders) => string;

interface ArrayLocation {
  start: number;
  end: number;
  elements: Array<{
    start: number;
    end: number;
    value?: string;
    type: string;
    name?: string;
    calleeName?: string;
  }>;
}

interface ArrayStyle {
  isMultiLine: boolean;
  indent: string;
  elementIndent: string;
}

interface PropertyCreationInfo {
  insertPosition: number;
  propertyPath: string[];
  needsComma: boolean;
  indent: string;
}

/**
 * Modifies the given content by adding a value to a specified path within the content.
 */
export function addToConfig({
  content,
  targetPath,
  valueGenerator,
}: {
  content: string;
  targetPath: string;
  valueGenerator: ValueGenerator;
}): string {
  const parseResult = parseSync("config.ts", content);

  if (parseResult.errors.length > 0) {
    return content;
  }

  const valueToAdd = valueGenerator(builders);
  const pathParts = targetPath.split(".");

  const configObjects = new Map<string, { start: number; end: number }>();
  let targetObjectStart: number | null = null;
  let targetObjectEnd: number | null = null;

  const collectVisitor = new Visitor({
    VariableDeclarator(node) {
      if (node.id?.type !== "Identifier" || !node.init) return;
      const varName = node.id.name;

      if (node.init.type === "ObjectExpression") {
        configObjects.set(varName, { start: node.init.start, end: node.init.end });
      } else if (
        node.init.type === "CallExpression" &&
        node.init.arguments?.length > 0 &&
        node.init.arguments[0]?.type === "ObjectExpression"
      ) {
        configObjects.set(varName, {
          start: node.init.arguments[0].start,
          end: node.init.arguments[0].end,
        });
      }
    },
  });
  collectVisitor.visit(parseResult.program);

  const findExportVisitor = new Visitor({
    ExportDefaultDeclaration(node) {
      const decl = node.declaration;
      if (!decl) return;

      if (decl.type === "ObjectExpression") {
        targetObjectStart = decl.start;
        targetObjectEnd = decl.end;
      } else if (decl.type === "Identifier") {
        const obj = configObjects.get(decl.name);
        if (obj) {
          targetObjectStart = obj.start;
          targetObjectEnd = obj.end;
        }
      } else if (
        (decl.type === "TSAsExpression" || decl.type === "TSSatisfiesExpression") &&
        decl.expression?.type === "ObjectExpression"
      ) {
        targetObjectStart = decl.expression.start;
        targetObjectEnd = decl.expression.end;
      } else if (decl.type === "CallExpression" && decl.arguments?.length > 0) {
        const arg = decl.arguments[0];
        if (arg?.type === "ObjectExpression") {
          targetObjectStart = arg.start;
          targetObjectEnd = arg.end;
        } else if (arg?.type === "Identifier") {
          const obj = configObjects.get(arg.name);
          if (obj) {
            targetObjectStart = obj.start;
            targetObjectEnd = obj.end;
          }
        }
      }
    },

    AssignmentExpression(node) {
      const left = node.left;
      if (
        left?.type === "MemberExpression" &&
        left.object?.type === "Identifier" &&
        left.object.name === "module" &&
        left.property?.type === "Identifier" &&
        left.property.name === "exports"
      ) {
        if (node.right?.type === "ObjectExpression") {
          targetObjectStart = node.right.start;
          targetObjectEnd = node.right.end;
        } else if (node.right?.type === "Identifier") {
          const obj = configObjects.get(node.right.name);
          if (obj) {
            targetObjectStart = obj.start;
            targetObjectEnd = obj.end;
          }
        } else if (
          node.right?.type === "CallExpression" &&
          node.right.arguments?.length > 0 &&
          node.right.arguments[0]?.type === "ObjectExpression"
        ) {
          targetObjectStart = node.right.arguments[0].start;
          targetObjectEnd = node.right.arguments[0].end;
        }
      }
    },
  });
  findExportVisitor.visit(parseResult.program);

  if (targetObjectStart === null || targetObjectEnd === null) {
    return content;
  }

  const result = findTargetArrayOrCreationPoint(content, targetObjectStart, targetObjectEnd, pathParts);
  const s = new MagicString(content);

  if (result.type === "found") {
    const targetArrayLocation = result.array;
    const exists = checkValueExists(targetArrayLocation, valueToAdd);
    if (exists) {
      return content;
    }

    const arrayStyle = detectArrayStyle(content, targetArrayLocation);

    if (targetArrayLocation.elements.length > 0) {
      const lastElement = targetArrayLocation.elements[targetArrayLocation.elements.length - 1];

      if (arrayStyle.isMultiLine) {
        // Multi-line style: add on a new line with proper indentation
        // Check if there's already a trailing comma after the last element
        const afterLastElement = content.slice(lastElement.end, targetArrayLocation.end);
        const hasTrailingComma = /^[\s]*,/.test(afterLastElement);

        if (hasTrailingComma) {
          // Find where to insert (after the comma)
          const commaOffset = afterLastElement.indexOf(",") + 1;
          s.appendLeft(lastElement.end + commaOffset, `\n${arrayStyle.elementIndent}${valueToAdd}`);
        } else {
          // Add comma and new element on new line
          s.appendLeft(lastElement.end, `,\n${arrayStyle.elementIndent}${valueToAdd}`);
        }
      } else {
        // Inline style: add with comma and space
        s.appendLeft(lastElement.end, `, ${valueToAdd}`);
      }
    } else {
      // Empty array
      if (arrayStyle.isMultiLine) {
        s.appendLeft(targetArrayLocation.start + 1, `\n${arrayStyle.elementIndent}${valueToAdd}\n${arrayStyle.indent}`);
      } else {
        s.appendLeft(targetArrayLocation.start + 1, valueToAdd);
      }
    }
  } else if (result.type === "create") {
    const { insertPosition, propertyPath, needsComma, indent } = result.creation;
    const indentUnit = detectIndentUnit(content);
    let newContent = "";
    const lastIndex = propertyPath.length - 1;

    for (let i = 0; i < propertyPath.length; i++) {
      const key = propertyPath[i];
      const currentIndent = indent + indentUnit.repeat(i);

      if (i === lastIndex) {
        newContent += `${currentIndent}${key}: [${valueToAdd}]`;
      } else {
        newContent += `${currentIndent}${key}: {\n`;
      }
    }

    for (let i = propertyPath.length - 2; i >= 0; i--) {
      const currentIndent = indent + indentUnit.repeat(i);
      newContent += `\n${currentIndent}}`;
    }

    const prefix = needsComma ? ",\n" : "\n";
    s.appendLeft(insertPosition, prefix + newContent);
  } else {
    return content;
  }

  return s.toString();
}

type FindResult =
  | { type: "found"; array: ArrayLocation }
  | { type: "create"; creation: PropertyCreationInfo }
  | { type: "none" };

/**
 * Find the target array at the given path within an object,
 * or return creation point info if property doesn't exist
 */
function findTargetArrayOrCreationPoint(
  content: string,
  objectStart: number,
  objectEnd: number,
  pathParts: string[],
): FindResult {
  const objectContent = content.slice(objectStart, objectEnd);
  // Wrap in parentheses to parse as expression, not block statement
  const wrappedContent = `(${objectContent})`;
  const parseResult = parseSync("temp.ts", wrappedContent);

  if (parseResult.errors.length > 0) {
    return { type: "none" };
  }

  // Offset adjusts for the leading "(" we added
  const baseOffset = objectStart - 1;

  interface ObjectInfo {
    start: number;
    end: number;
    properties: Array<{
      key: string;
      start: number;
      end: number;
      valueType: string;
      value: unknown;
    }>;
  }

  function extractObjectInfo(node: unknown): ObjectInfo {
    const obj = node as { type: string; start: number; end: number; properties: unknown[] };
    const props: ObjectInfo["properties"] = [];

    for (const prop of obj.properties || []) {
      const p = prop as {
        type: string;
        key: { type: string; name?: string; value?: string };
        value: { type: string; start: number; end: number };
        start: number;
        end: number;
      };

      if (p.type !== "ObjectProperty" && p.type !== "Property") continue;

      let propKey: string | undefined;
      if (p.key.type === "Identifier") {
        propKey = p.key.name;
      } else if (p.key.type === "StringLiteral" || p.key.type === "Literal") {
        propKey = String(p.key.value);
      }

      if (propKey) {
        props.push({
          key: propKey,
          start: baseOffset + p.start,
          end: baseOffset + p.end,
          valueType: p.value.type,
          value: p.value,
        });
      }
    }

    return {
      start: baseOffset + obj.start,
      end: baseOffset + obj.end,
      properties: props,
    };
  }

  function processPath(objInfo: ObjectInfo, remainingPath: string[], depth: number): FindResult {
    if (remainingPath.length === 0) {
      return { type: "none" };
    }

    const key = remainingPath[0];
    const prop = objInfo.properties.find((p) => p.key === key);

    if (!prop) {
      const lastProp = objInfo.properties[objInfo.properties.length - 1];
      const insertPosition = lastProp ? lastProp.end : objInfo.start + 1;
      const needsComma = objInfo.properties.length > 0;
      const beforeObj = content.slice(Math.max(0, objInfo.start - 50), objInfo.start);
      const indentMatch = beforeObj.match(/\n([ \t]*)$/);
      const indentUnit = detectIndentUnit(content);
      const baseIndent = indentMatch ? indentMatch[1] : indentUnit;
      const indent = baseIndent + indentUnit.repeat(depth);

      return {
        type: "create",
        creation: {
          insertPosition,
          propertyPath: remainingPath,
          needsComma,
          indent,
        },
      };
    }

    if (remainingPath.length === 1) {
      const value = prop.value as { type: string; start: number; end: number };
      if (value.type === "ArrayExpression") {
        return {
          type: "found",
          array: extractArrayLocation(value, baseOffset),
        };
      } else if (value.type === "CallExpression") {
        const arr = extractArrayFromCallExpression(value, baseOffset);
        if (arr) {
          return { type: "found", array: arr };
        }
      }
      return { type: "none" };
    }

    const value = prop.value as { type: string };
    if (value.type !== "ObjectExpression") {
      return { type: "none" };
    }

    const nestedObjInfo = extractObjectInfo(prop.value);
    return processPath(nestedObjInfo, remainingPath.slice(1), depth + 1);
  }

  let result: FindResult = { type: "none" };

  const visitor = new Visitor({
    ObjectExpression(node) {
      if (result.type === "none") {
        const objInfo = extractObjectInfo(node);
        result = processPath(objInfo, pathParts, 0);
      }
    },
  });

  visitor.visit(parseResult.program);

  return result;
}

/**
 * Extract array location from an ArrayExpression node
 */
function extractArrayLocation(node: unknown, offset: number): ArrayLocation {
  const arr = node as { start: number; end: number; elements: unknown[] };
  const elements: ArrayLocation["elements"] = [];

  for (const el of arr.elements || []) {
    if (!el) continue;
    const e = el as {
      start: number;
      end: number;
      type: string;
      value?: unknown;
      name?: string;
      callee?: { type: string; name?: string };
    };

    const elemInfo: ArrayLocation["elements"][0] = {
      start: offset + e.start,
      end: offset + e.end,
      type: e.type,
    };

    if (e.type === "StringLiteral" || e.type === "Literal") {
      elemInfo.value = String(e.value);
    }

    if (e.type === "Identifier") {
      elemInfo.name = e.name;
    }

    if (e.type === "CallExpression" && e.callee?.type === "Identifier") {
      elemInfo.calleeName = e.callee.name;
    }

    elements.push(elemInfo);
  }

  return {
    start: offset + arr.start,
    end: offset + arr.end,
    elements,
  };
}

/**
 * Extract array from a call expression like [].filter(Boolean)
 */
function extractArrayFromCallExpression(node: unknown, offset: number): ArrayLocation | null {
  const call = node as {
    type: string;
    callee: { type: string; object?: unknown; property?: { name?: string } };
    start: number;
    end: number;
  };

  if (call.callee?.type === "MemberExpression") {
    const obj = call.callee.object as { type: string; start: number; end: number; elements?: unknown[] };
    if (obj?.type === "ArrayExpression") {
      return extractArrayLocation(obj, offset);
    }
  }

  return null;
}

/**
 * Detect the indentation unit used in the file (tabs or spaces, and how many)
 */
function detectIndentUnit(content: string): string {
  // Look for common indentation patterns
  const lines = content.split("\n");
  const indentCounts: Map<string, number> = new Map();

  for (const line of lines) {
    const match = line.match(/^(\s+)\S/);
    if (match) {
      const indent = match[1];
      // Check if this looks like a base indent (not nested)
      if (indent === "\t") {
        indentCounts.set("\t", (indentCounts.get("\t") || 0) + 1);
      } else if (/^ +$/.test(indent)) {
        // Count spaces - try to find the smallest common unit
        const len = indent.length;
        if (len <= 4) {
          indentCounts.set(indent, (indentCounts.get(indent) || 0) + 1);
        }
      }
    }
  }

  // Find most common indent
  let bestIndent = "  "; // default to 2 spaces
  let bestCount = 0;

  for (const [indent, count] of indentCounts) {
    if (count > bestCount) {
      bestCount = count;
      bestIndent = indent;
    }
  }

  // If we found tabs, use tab; otherwise use the detected space count
  if (bestIndent === "\t") {
    return "\t";
  }

  // Try to determine the base indent unit (2 or 4 spaces typically)
  const spaceCounts = Array.from(indentCounts.entries())
    .filter(([k]) => /^ +$/.test(k))
    .map(([k, v]) => ({ len: k.length, count: v }));

  if (spaceCounts.length > 0) {
    // Find the GCD of all space lengths to determine the unit
    const lengths = spaceCounts.map((s) => s.len);
    const gcd = lengths.reduce((a, b) => {
      while (b) {
        [a, b] = [b, a % b];
      }
      return a;
    });

    if (gcd === 2 || gcd === 4) {
      return " ".repeat(gcd);
    }
  }

  return bestIndent;
}

/**
 * Detect the array formatting style (inline vs multi-line)
 */
function detectArrayStyle(content: string, arrayLocation: ArrayLocation): ArrayStyle {
  const arrayContent = content.slice(arrayLocation.start, arrayLocation.end);
  const indentUnit = detectIndentUnit(content);

  // Check if the array spans multiple lines
  const hasNewlines = arrayContent.includes("\n");

  if (!hasNewlines || arrayLocation.elements.length === 0) {
    // Inline style: [a, b, c]
    return {
      isMultiLine: false,
      indent: "",
      elementIndent: "",
    };
  }

  // Multi-line style - detect the element indentation
  const firstElement = arrayLocation.elements[0];
  const contentBeforeFirst = content.slice(arrayLocation.start, firstElement.start);

  // Find the indentation of the first element
  const indentMatch = contentBeforeFirst.match(/\n([ \t]*)$/);
  const elementIndent = indentMatch ? indentMatch[1] : indentUnit;

  // Determine the array's base indent (one level less than elements)
  let arrayIndent = "";
  if (elementIndent.startsWith("\t")) {
    arrayIndent = elementIndent.slice(0, -1);
  } else {
    const unitLen = indentUnit.length;
    if (elementIndent.length >= unitLen) {
      arrayIndent = elementIndent.slice(0, -unitLen);
    }
  }

  return {
    isMultiLine: true,
    indent: arrayIndent,
    elementIndent,
  };
}

/**
 * Check if the value already exists in the array
 */
function checkValueExists(arrayLocation: ArrayLocation, valueToAdd: string): boolean {
  return arrayLocation.elements.some((el) => {
    if ((el.type === "StringLiteral" || el.type === "Literal") && el.value !== undefined) {
      try {
        const parsed = JSON.parse(valueToAdd);
        return el.value === parsed;
      } catch {
        return false;
      }
    }

    if (el.type === "Identifier" && el.name) {
      return el.name === valueToAdd;
    }

    if (el.type === "CallExpression" && el.calleeName) {
      const callMatch = valueToAdd.match(/^(\w+)\(/);
      if (callMatch) {
        return el.calleeName === callMatch[1];
      }
    }

    return false;
  });
}
