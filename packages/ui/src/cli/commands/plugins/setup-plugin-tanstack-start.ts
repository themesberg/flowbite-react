import { pluginName, pluginPath } from "../../consts";
import { addPluginToConfig } from "../../utils/add-plugin-to-config";
import { joinNormalizedPath } from "../../utils/normalize-path";

export async function setupPluginTanStackStart(configPath: string) {
  await addPluginToConfig({
    configKey: "vite.plugins",
    configPath,
    pluginImportPath: joinNormalizedPath(pluginPath, "vite"),
    pluginName,
  });
}
