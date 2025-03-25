import { pluginName, pluginPath } from "../../consts";
import { addPluginToConfig } from "../../utils/add-plugin-to-config";
import { joinNormalizedPath } from "../../utils/normalize-path";

export async function setupPluginAstro(configPath: string) {
  await addPluginToConfig({
    configKey: "integrations",
    configPath,
    pluginImportPath: joinNormalizedPath(pluginPath, "astro"),
    pluginName,
  });
}
