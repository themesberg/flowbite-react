import type { Plugin } from "rolldown";
import { build } from "../cli/commands/build";
import { dev } from "../cli/commands/dev";
import { pluginName } from "./index";

export default (): Plugin => ({
  name: pluginName,
  async buildStart() {
    await build();
    await dev();
  },
});
