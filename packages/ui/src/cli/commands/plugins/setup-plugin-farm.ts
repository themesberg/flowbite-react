import path from "path";
import { pluginName, pluginPath } from "../../consts";
import { addPluginToConfig } from "../../utils/add-plugin-to-config";

export async function setupPluginFarm(configPath: string) {
  await addPluginToConfig({
    configKey: "plugins",
    configPath,
    pluginImportPath: path.join(pluginPath, "farm"),
    pluginName,
  });
}
