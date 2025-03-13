import { Plugin } from "esbuild";
import { build } from "../cli/commands/build";
import { dev } from "../cli/commands/dev";
import { pluginName } from "./index";

export default (): Plugin => ({
  name: pluginName,
  setup(pluginBuild) {
    let registered = false;

    pluginBuild.onStart(async () => {
      if (!registered) {
        registered = true;
        await build();

        // assume production build when `initialOptions.minify = true`
        if (!pluginBuild.initialOptions.minify) {
          dev();
        }
      }
    });
  },
});
