import type { EsbuildPlugin } from "unplugin";
import { build, dev } from "../cli";
import { pluginName } from "./index";

// TODO:
// revert back to `export default createEsbuildPlugin(unpluginFactory);` when it works
// currently `createEsbuildPlugin` does not register the `setup` callback for some reason
export default (): EsbuildPlugin => ({
  name: pluginName,
  setup(pluginBuild) {
    pluginBuild.onStart(async () => {
      await build();
      dev();
    });
  },
});
