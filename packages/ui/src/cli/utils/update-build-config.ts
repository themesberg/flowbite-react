import { parse } from "@typescript-eslint/typescript-estree";
import * as recast from "recast";
import { addImport } from "./add-import";

/**
 * Updates the build configuration by adding a plugin to the build options.
 *
 * @param {Object} options - The options for updating the build config.
 * @param {string} options.content - The source code content to modify.
 * @param {string} [options.pluginName='flowbiteReact'] - The name to use for the imported plugin.
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
  // Parse the content first
  const ast = recast.parse(content, {
    parser: {
      parse: (source: string) =>
        parse(source, {
          loc: true,
          range: true,
          tokens: true,
          comment: true,
        }),
    },
  });

  const b = recast.types.builders;

  // Visit the AST to find build({...}) calls
  recast.types.visit(ast, {
    visitCallExpression(path) {
      const { node } = path;

      // Check if this is a build() or Bun.build() call
      if (
        ((node.callee.type === "Identifier" && node.callee.name === "build") ||
          (node.callee.type === "MemberExpression" &&
            node.callee.object.type === "Identifier" &&
            node.callee.object.name === "Bun" &&
            node.callee.property.type === "Identifier" &&
            node.callee.property.name === "build")) &&
        node.arguments.length > 0 &&
        node.arguments[0].type === "ObjectExpression"
      ) {
        const buildOptions = node.arguments[0];

        // Find or create plugins property
        let pluginsProperty = buildOptions.properties.find(
          (p): p is recast.types.namedTypes.Property =>
            p.type === "Property" &&
            ((p.key.type === "Identifier" && p.key.name === "plugins") ||
              (p.key.type === "Literal" && p.key.value === "plugins")),
        );

        if (!pluginsProperty) {
          // Create new plugins array with our plugin
          pluginsProperty = b.property("init", b.identifier("plugins"), b.arrayExpression([b.identifier(pluginName)]));
          buildOptions.properties.push(pluginsProperty);
        } else if (pluginsProperty.value.type === "ArrayExpression") {
          // Check if plugin already exists in array
          const hasPlugin = pluginsProperty.value.elements.some(
            (el) => el?.type === "Identifier" && el.name === pluginName,
          );

          if (!hasPlugin) {
            // Add plugin to existing array
            pluginsProperty.value.elements.push(b.identifier(pluginName));
          }
        }
      }

      return false;
    },
  });

  // Get the modified code
  let modifiedCode = recast.print(ast).code;

  // Now add the import using the existing utility
  modifiedCode = addImport({
    content: modifiedCode,
    importName: pluginName,
    importPath: pluginImportPath,
  });

  return modifiedCode;
}
