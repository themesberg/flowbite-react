import type { EsbuildPlugin } from "unplugin";
import { build, dev } from "../cli";
import { pluginName } from "./index";

// TODO:
// revert back to `export default createEsbuildPlugin(unpluginFactory);` when it works
// currently `createEsbuildPlugin` does not register the `setup` callback for some reason
export default (): EsbuildPlugin => ({
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
