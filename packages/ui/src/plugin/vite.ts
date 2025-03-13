import type { Plugin } from "vite";
import { build } from "../cli/commands/build";
import { dev } from "../cli/commands/dev";
import { pluginName } from "./index";

export default (): Plugin => ({
  name: pluginName,
  async buildStart() {
    await build();
  },
  async configureServer() {
    await dev();
  },
});
