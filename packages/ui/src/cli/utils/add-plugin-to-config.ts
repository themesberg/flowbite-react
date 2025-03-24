import fs from "fs/promises";
import { addImport } from "./add-import";
import { addPlugin } from "./add-plugin";

/**
 * Add a plugin to the configuration file.
 * @param {Object} options - The options for adding the plugin.
 * @param {string} options.configKey - The key in the configuration file where the plugin will be added.
 * @param {string} options.configPath - The path to the configuration file.
 * @param {string} options.pluginImportPath - The import path of the plugin.
 * @param {string} options.pluginName - The name of the plugin.
 */
export async function addPluginToConfig({
  configKey,
  configPath,
  pluginImportPath,
  pluginName,
}: {
  configKey: string;
  configPath: string;
  pluginImportPath: string;
  pluginName: string;
}) {
  try {
    const content = await fs.readFile(configPath, "utf-8");

    // Add the import statement for the plugin
    const updatedContentWithImport = addImport({
      content,
      importPath: pluginImportPath,
      importName: pluginName,
    });

    // Add the plugin to the configuration
    const finalUpdatedContent = addPlugin({
      content: updatedContentWithImport,
      targetPath: configKey,
      pluginName,
    });

    if (finalUpdatedContent !== content) {
      console.log(`Updating ${configPath} with ${pluginName} plugin...`);
      await fs.writeFile(configPath, finalUpdatedContent, "utf-8");
    }
  } catch (error) {
    console.error(`Failed to setup ${pluginName} plugin:`, error);
  }
}
