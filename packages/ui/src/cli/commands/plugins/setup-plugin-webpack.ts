import path from "path";
import { pluginName, pluginPath } from "../../consts";
import { addPluginToConfig } from "../../utils/add-plugin-to-config";

export async function setupPluginWebpack(configPath: string) {
  await addPluginToConfig({
    configKey: "plugins",
    configPath,
    pluginImportPath: path.join(pluginPath, "webpack"),
    pluginName,
  });
}
