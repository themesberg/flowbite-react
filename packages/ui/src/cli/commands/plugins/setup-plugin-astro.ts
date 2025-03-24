import path from "path";
import { pluginName, pluginPath } from "../../consts";
import { addPluginToConfig } from "../../utils/add-plugin-to-config";

export async function setupPluginAstro(configPath: string) {
  await addPluginToConfig({
    configKey: "integrations",
    configPath,
    pluginImportPath: path.join(pluginPath, "astro"),
    pluginName,
  });
}
