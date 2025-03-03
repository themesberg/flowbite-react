// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import * as acorn from "acorn";
import * as recast from "recast";
import { types } from "recast";

/**
 * Modifies the given content by adding a value to a specified path within the content.
 *
 * @param {Object} options - Options for adding a value to config.
 * @param {string} options.content - The content to modify.
 * @param {string} options.targetPath - The dot-separated path where the value will be added.
 * @param {Function} options.valueGenerator - Function that generates the AST node to be added.
 * @returns {string} The modified content with the added value.
 */
export function addToConfig({
  content,
  targetPath,
  valueGenerator,
}: {
  content: string;
  targetPath: string;
  valueGenerator: (b: typeof recast.types.builders) => types.namedTypes.Expression;
}): string {
  const ast = recast.parse(content, { parser: acorn });
  let configObject: types.namedTypes.ObjectExpression | null = null;

  recast.types.visit(ast, {
    visitVariableDeclarator(path) {
      // Store reference to the config object if found
      if (
        path.node.id.type === "Identifier" &&
        path.node.id.name === "config" &&
        path.node.init.type === "CallExpression" &&
        path.node.init.callee.type === "Identifier" &&
        path.node.init.arguments.length > 0 &&
        path.node.init.arguments[0].type === "ObjectExpression"
      ) {
        configObject = path.node.init.arguments[0];
      } else if (
        path.node.id.type === "Identifier" &&
        path.node.id.name === "config" &&
        path.node.init.type === "ObjectExpression"
      ) {
        configObject = path.node.init;
      }
      return false;
    },

    visitExportDefaultDeclaration(path) {
      const { node } = path;
      if (node.declaration.type === "ObjectExpression") {
        // Handle direct object export: export default {}
        ensureArrayProperty(node.declaration, targetPath, valueGenerator);
      } else if (node.declaration.type === "Identifier" && configObject) {
        // Handle variable export: export default config
        ensureArrayProperty(configObject, targetPath, valueGenerator);
      } else if (
        node.declaration.type === "CallExpression" &&
        node.declaration.arguments.length > 0 &&
        node.declaration.arguments[0].type === "ObjectExpression"
      ) {
        // Handle function call with object argument for default export
        ensureArrayProperty(node.declaration.arguments[0], targetPath, valueGenerator);
      }
      return false;
    },

    visitAssignmentExpression(path) {
      const { node } = path;
      if (
        node.left.type === "MemberExpression" &&
        node.left.object.type === "Identifier" &&
        node.left.object.name === "module" &&
        node.left.property.type === "Identifier" &&
        node.left.property.name === "exports"
      ) {
        if (node.right.type === "ObjectExpression") {
          // Direct object assignment: module.exports = {}
          ensureArrayProperty(node.right, targetPath, valueGenerator);
        } else if (node.right.type === "Identifier" && configObject) {
          // Variable assignment: module.exports = config
          ensureArrayProperty(configObject, targetPath, valueGenerator);
        } else if (
          node.right.type === "CallExpression" &&
          node.right.arguments.length > 0 &&
          node.right.arguments[0].type === "ObjectExpression"
        ) {
          // Handle function call with object argument for module.exports
          ensureArrayProperty(node.right.arguments[0], targetPath, valueGenerator);
        }
      }
      return false;
    },
  });

  return recast.print(ast).code;
}

/**
 * Ensures that a given nested path exists and appends a value to an array.
 *
 * @param {object} objExpr - The ObjectExpression AST node.
 * @param {string} path - The dot-separated path (e.g., "vite.plugins").
 * @param {Function} valueGenerator - Function that generates the AST node to be added.
 */
function ensureArrayProperty(
  objExpr: types.namedTypes.ObjectExpression,
  path: string,
  valueGenerator: (b: typeof recast.types.builders) => types.namedTypes.Expression,
): void {
  const b = recast.types.builders;
  const keys = path.split(".");
  let current = objExpr;

  // Create or traverse to each level of the path
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    let prop = current.properties.find((p) => {
      if (p.type !== "Property") return false;
      const propKey = p.key;
      return (
        (propKey.type === "Identifier" && propKey.name === key) || (propKey.type === "Literal" && propKey.value === key)
      );
    });

    if (!prop) {
      // Create new property with appropriate value
      const value = i === keys.length - 1 ? b.arrayExpression([]) : b.objectExpression([]);
      prop = b.property("init", b.identifier(key), value);
      current.properties.push(prop);
    }

    if (prop.type === "Property") {
      // Ensure the value is an object expression if we're not at the end
      if (i < keys.length - 1 && prop.value.type !== "ObjectExpression") {
        prop.value = b.objectExpression([]);
      }
      // Ensure the value is an array expression if we're at the end
      else if (i === keys.length - 1 && prop.value.type !== "ArrayExpression") {
        prop.value = b.arrayExpression([]);
      }
      current = prop.value;
    }
  }

  // Add the value if it doesn't already exist
  if (current.type === "ArrayExpression") {
    const value = valueGenerator(b);

    // Check if the value already exists
    const exists = current.elements.some((el) => {
      if (!el) return false;

      // Both Literal and StringLiteral types have a 'value' property for string values
      if (
        (el.type === "StringLiteral" || el.type === "Literal") &&
        (value.type === "StringLiteral" || value.type === "Literal") &&
        typeof el.value === "string" &&
        typeof value.value === "string"
      ) {
        return el.value === value.value;
      }

      // For function calls, compare the function names
      if (
        el.type === "CallExpression" &&
        value.type === "CallExpression" &&
        el.callee?.type === "Identifier" &&
        value.callee?.type === "Identifier"
      ) {
        return el.callee.name === value.callee.name;
      }

      // For identifiers, compare their names
      if (el.type === "Identifier" && value.type === "Identifier") {
        return el.name === value.name;
      }

      return false;
    });

    if (!exists) {
      current.elements.push(value);
    }
  }
}
