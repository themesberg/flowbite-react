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

    if (targetArrayLocation.elements.length > 0) {
      const lastElement = targetArrayLocation.elements[targetArrayLocation.elements.length - 1];
      s.appendLeft(lastElement.end, `, ${valueToAdd}`);
    } else {
      s.appendLeft(targetArrayLocation.start + 1, valueToAdd);
    }
  } else if (result.type === "create") {
    const { insertPosition, propertyPath, needsComma, indent } = result.creation;
    let newContent = "";
    const lastIndex = propertyPath.length - 1;

    for (let i = 0; i < propertyPath.length; i++) {
      const key = propertyPath[i];
      const currentIndent = indent + "  ".repeat(i);

      if (i === lastIndex) {
        newContent += `${currentIndent}${key}: [${valueToAdd}]`;
      } else {
        newContent += `${currentIndent}${key}: {\n`;
      }
    }

    for (let i = propertyPath.length - 2; i >= 0; i--) {
      const currentIndent = indent + "  ".repeat(i);
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
      const baseIndent = indentMatch ? indentMatch[1] : "  ";
      const indent = baseIndent + "  ".repeat(depth);

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
