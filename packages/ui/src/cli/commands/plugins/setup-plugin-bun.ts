import fs from "fs/promises";
import toml from "@iarna/toml";
import { pluginName, pluginPath } from "../../consts";
import { joinNormalizedPath } from "../../utils/normalize-path";
import { updateBuildConfig } from "../../utils/update-build-config";

export async function setupPluginBun(configPath: string) {
  try {
    // update bunfig.toml
    const bunfig = await fs.readFile(configPath, "utf-8");
    const bunfigContent = toml.parse(bunfig) as { serve?: { static?: { plugins?: string[] } } };
    const bunPluginPath = joinNormalizedPath(pluginPath, "bun");

    if (bunfigContent.serve?.static?.plugins?.includes(pluginName)) {
      return;
    }

    bunfigContent.serve ??= {};
    bunfigContent.serve.static ??= {};
    bunfigContent.serve.static.plugins ??= [];

    if (!bunfigContent.serve.static.plugins.includes(bunPluginPath)) {
      bunfigContent.serve.static.plugins.push(bunPluginPath);

      console.log(`Updating ${configPath} with flowbite-react configuration...`);
      await fs.writeFile(configPath, toml.stringify(bunfigContent), "utf-8");
    }

    // update build.ts
    const buildConfigPath = "build.ts";
    const buildConfig = await fs.readFile(buildConfigPath, "utf-8");
    const updatedBuildConfig = updateBuildConfig({
      content: buildConfig,
      pluginName,
      pluginImportPath: bunPluginPath,
    });

    if (buildConfig !== updatedBuildConfig) {
      console.log(`Updating ${buildConfigPath} with flowbite-react configuration...`);
      await fs.writeFile(buildConfigPath, updatedBuildConfig, "utf-8");
    }
  } catch (error) {
    console.error(`Failed to update ${configPath} file...`, error);
  }
}
