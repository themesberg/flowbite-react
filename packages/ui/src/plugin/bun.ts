import type { BunPlugin } from "bun";
import { build } from "../cli/commands/build";
import { dev } from "../cli/commands/dev";
import { pluginName } from "./index";

export default {
  name: pluginName,
  setup({ onStart, config }) {
    onStart(async () => {
      // assume production build when `config.minify = true`
      if (config.minify) {
        await build();
      } else {
        await dev();
      }
    });
  },
} satisfies BunPlugin;
