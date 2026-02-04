import MagicString from "magic-string";
import type { ArrayExpression, CallExpression, Expression, IdentifierReference, ObjectExpression } from "oxc-parser";
import { parseSync, Visitor } from "oxc-parser";
import { addImport } from "./add-import";

interface PluginsArrayInfo {
  arrayStart: number;
  arrayEnd: number;
  hasElements: boolean;
  lastElementEnd?: number;
  pluginExists: boolean;
}

interface BuildOptionsInfo {
  objectStart: number;
  objectEnd: number;
  lastPropertyEnd?: number;
  hasProperties: boolean;
}

function isIdentifier(node: Expression): node is IdentifierReference {
  return node.type === "Identifier";
}

function isMemberExpression(
  node: Expression,
): node is Expression & { type: "MemberExpression"; object: Expression; property: { name?: string } } {
  return node.type === "MemberExpression";
}

function isObjectExpression(node: Expression | ObjectExpression): node is ObjectExpression {
  return node.type === "ObjectExpression";
}

function isArrayExpression(node: Expression | ArrayExpression): node is ArrayExpression {
  return node.type === "ArrayExpression";
}

/**
 * Updates the build configuration by adding a plugin to the build options.
 *
 * @param {Object} options - The options for updating the build config.
 * @param {string} options.content - The source code content to modify.
 * @param {string} options.pluginName - The name to use for the imported plugin.
 * @param {string} options.pluginImportPath - The import path for the plugin.
 * @returns {string} The modified source code with the plugin added.
 */
export function updateBuildConfig({
  content,
  pluginName,
  pluginImportPath,
}: {
  content: string;
  pluginName: string;
  pluginImportPath: string;
}): string {
  const result = parseSync("config.ts", content);

  if (result.errors.length > 0) {
    return content;
  }

  let pluginsArrayInfo: PluginsArrayInfo | null = null;
  let buildOptionsInfo: BuildOptionsInfo | null = null;

  const visitor = new Visitor({
    CallExpression(node: CallExpression) {
      const { callee } = node;

      let isBuildCall = false;

      if (isIdentifier(callee) && callee.name === "build") {
        isBuildCall = true;
      } else if (
        isMemberExpression(callee) &&
        isIdentifier(callee.object) &&
        callee.object.name === "Bun" &&
        callee.property.name === "build"
      ) {
        isBuildCall = true;
      }

      if (!isBuildCall || node.arguments.length === 0) return;

      const firstArg = node.arguments[0] as Expression;
      if (!isObjectExpression(firstArg)) return;

      const properties = firstArg.properties;

      buildOptionsInfo = {
        objectStart: firstArg.start,
        objectEnd: firstArg.end,
        hasProperties: properties.length > 0,
      };

      if (properties.length > 0) {
        const lastProp = properties[properties.length - 1];
        buildOptionsInfo.lastPropertyEnd = lastProp.end;
      }

      for (const prop of properties) {
        if (prop.type === "SpreadElement") continue;

        let isPluginsKey = false;
        if (prop.key.type === "Identifier" && prop.key.name === "plugins") {
          isPluginsKey = true;
        } else if (prop.key.type === "Literal" && prop.key.value === "plugins") {
          isPluginsKey = true;
        }

        if (!isPluginsKey) continue;

        const propValue = prop.value;
        if (isArrayExpression(propValue)) {
          const elements = propValue.elements;
          const pluginExists = elements.some((el) => el !== null && el.type === "Identifier" && el.name === pluginName);

          let lastElementEnd: number | undefined;
          if (elements.length > 0) {
            const lastElement = elements[elements.length - 1];
            if (lastElement) {
              lastElementEnd = lastElement.end;
            }
          }

          pluginsArrayInfo = {
            arrayStart: propValue.start,
            arrayEnd: propValue.end,
            hasElements: elements.length > 0,
            lastElementEnd,
            pluginExists,
          };
        }
        break;
      }
    },
  });

  visitor.visit(result.program);

  const finalBuildOptions = buildOptionsInfo as BuildOptionsInfo | null;
  const finalPluginsArray = pluginsArrayInfo as PluginsArrayInfo | null;

  if (!finalBuildOptions) {
    return addImport({
      content,
      importName: pluginName,
      importPath: pluginImportPath,
    });
  }

  const s = new MagicString(content);

  if (finalPluginsArray) {
    if (!finalPluginsArray.pluginExists) {
      if (finalPluginsArray.hasElements && finalPluginsArray.lastElementEnd) {
        s.appendLeft(finalPluginsArray.lastElementEnd, `, ${pluginName}`);
      } else {
        s.appendLeft(finalPluginsArray.arrayStart + 1, pluginName);
      }
    }
  } else {
    if (finalBuildOptions.hasProperties && finalBuildOptions.lastPropertyEnd) {
      s.appendLeft(finalBuildOptions.lastPropertyEnd, `,\n        plugins: [${pluginName}]`);
    } else {
      s.appendLeft(finalBuildOptions.objectStart + 1, ` plugins: [${pluginName}] `);
    }
  }

  let modifiedCode = s.toString();

  modifiedCode = addImport({
    content: modifiedCode,
    importName: pluginName,
    importPath: pluginImportPath,
  });

  return modifiedCode;
}
