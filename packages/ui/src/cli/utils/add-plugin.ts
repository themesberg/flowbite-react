import { addToConfig } from "./add-to-config";

/**
 * Modifies the given content by adding a plugin to a specified path within the content.
 *
 * @param {Object} options - Options for adding a plugin.
 * @param {string} options.content - The content to modify.
 * @param {string} options.targetPath - The dot-separated path where the plugin will be added.
 * @param {string} options.pluginName - The name of the plugin to add.
 * @returns {string} The modified content with the added plugin.
 */
export function addPlugin({
  content,
  targetPath,
  pluginName,
}: {
  content: string;
  targetPath: string;
  pluginName: string;
}): string {
  return addToConfig({
    content,
    targetPath,
    valueGenerator: (b) => b.callExpression(b.identifier(pluginName), []),
  });
}
