import fs from "fs/promises";
import path from "path";
import cjson from "comment-json";
import { pluginName, pluginPath } from "../../consts";
import { addPluginToConfig } from "../../utils/add-plugin-to-config";

export async function setupPluginModernjs(configPath: string) {
  await addPluginToConfig({
    configKey: "plugins",
    configPath,
    pluginImportPath: path.join(pluginPath, "modernjs"),
    pluginName,
  });

  // TODO: remove when `node/node10` moduleResolution is fixed in the build process
  // update `tsconfig.json` compilerOptions `module` and `moduleResolution`
  const tsConfigFile = "tsconfig.json";

  try {
    const content = await fs.readFile(tsConfigFile, "utf-8");
    const parsedContent: { compilerOptions?: Record<string, unknown> } = cjson.parse(content) as typeof parsedContent;

    const defaultTsConfig = {
      module: "ESNext",
      moduleResolution: "bundler",
    };

    if (
      parsedContent.compilerOptions?.module !== defaultTsConfig.module ||
      parsedContent.compilerOptions?.moduleResolution !== defaultTsConfig.moduleResolution
    ) {
      parsedContent.compilerOptions ||= {};
      parsedContent.compilerOptions.module = "ESNext";
      parsedContent.compilerOptions.moduleResolution = "bundler";

      console.log(`Updating ${tsConfigFile} file with flowbite-react configuration...`);
      await fs.writeFile(tsConfigFile, cjson.stringify(parsedContent, null, 2), "utf-8");
    }
  } catch (error) {
    console.error(`Failed to update ${tsConfigFile} file...`, error);
  }
}
