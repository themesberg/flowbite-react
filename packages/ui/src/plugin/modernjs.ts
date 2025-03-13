import type { AppTools, CliPlugin } from "@modern-js/app-tools";
import { build } from "../cli/commands/build";
import { dev } from "../cli/commands/dev";
import { pluginName } from "./index";

export default (): CliPlugin<AppTools> => ({
  name: pluginName,
  setup() {
    return {
      async beforeBuild() {
        await build();
      },
      async beforeDev() {
        await build();
        await dev();
      },
    };
  },
});
