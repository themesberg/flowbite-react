import type { RspackPluginInstance } from "@rspack/core";
import { build } from "../cli/commands/build";
import { dev } from "../cli/commands/dev";
import { pluginName } from "./index";

export default (): RspackPluginInstance => ({
  name: pluginName,
  apply(compiler) {
    let devServerStarted = false;

    compiler.hooks.beforeCompile.tapPromise(pluginName, async () => {
      const isDev = compiler.options.mode === "development";
      const isBuild = compiler.options.mode === "production";

      if (isBuild) {
        await build();
      } else if (isDev && !devServerStarted) {
        devServerStarted = true;
        await dev();
      }
    });
  },
});
