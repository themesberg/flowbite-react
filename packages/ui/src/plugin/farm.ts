import type { JsPlugin } from "@farmfe/core";
import { build } from "../cli/commands/build";
import { dev } from "../cli/commands/dev";
import { pluginName } from "./index";

export default (): JsPlugin => ({
  name: pluginName,
  buildStart: {
    async executor() {
      await build();
    },
  },
  async configureDevServer() {
    await dev();
  },
});
