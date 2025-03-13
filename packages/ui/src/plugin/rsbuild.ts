import type { RsbuildPlugin } from "@rsbuild/core";
import { build } from "../cli/commands/build";
import { dev } from "../cli/commands/dev";
import { pluginName } from "./index";

export default (): RsbuildPlugin => ({
  name: pluginName,
  setup(api) {
    api.onBeforeBuild(async () => {
      await build();
    });
    api.onBeforeStartDevServer(async () => {
      await dev();
    });
  },
});
