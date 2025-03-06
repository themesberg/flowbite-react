import type { BunPlugin } from "bun";
import { build, dev } from "../cli";
import { pluginName } from "./index";

export default {
  name: pluginName,
  setup({ onStart, config }) {
    onStart(async () => {
      await build();

      // assume production build when `config.minify = true`
      if (!config.minify) {
        await dev();
      }
    });
  },
} satisfies BunPlugin;
