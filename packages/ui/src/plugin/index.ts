import type { UnpluginFactory } from "unplugin";
import { createUnplugin } from "unplugin";
import { build, dev } from "../cli";

export const pluginName = "unplugin-flowbite-react";

export const unpluginFactory: UnpluginFactory<undefined> = () => ({
  name: pluginName,
  vite: {
    async buildStart() {
      await build();
    },
    async configureServer() {
      await dev();
    },
  },
  rollup: {
    async buildStart() {
      await build();
      await dev();
    },
  },
  rolldown: {
    async buildStart() {
      await build();
      await dev();
    },
  },
  webpack(compiler) {
    let devServerStarted = false;

    compiler.hooks.beforeCompile.tapPromise(pluginName, async () => {
      const isDev = compiler.options.mode === "development";
      const isBuild = compiler.options.mode === "production";

      if (isBuild) {
        await build();
      } else if (isDev && !devServerStarted) {
        devServerStarted = true;
        await build();
        await dev();
      }
    });
  },
  rspack(compiler) {
    let devServerStarted = false;

    compiler.hooks.beforeCompile.tapPromise(pluginName, async () => {
      const isDev = compiler.options.mode === "development";
      const isBuild = compiler.options.mode === "production";

      if (isBuild) {
        await build();
      } else if (isDev && !devServerStarted) {
        devServerStarted = true;
        await build();
        await dev();
      }
    });
  },
  esbuild: {
    // see `packages/ui/src/plugin/esbuild.ts`
  },
  farm: {
    buildStart: {
      async executor() {
        await build();
      },
    },
    async configureDevServer() {
      await dev();
    },
  },
});

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory);
