import type { UnpluginFactory } from "unplugin";
import { createUnplugin } from "unplugin";
import { build, dev } from "../cli";

export const pluginName = "unplugin-flowbite-react";

const devServerStarted = {
  webpack: false,
  rspack: false,
};

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
  async webpack(compiler) {
    compiler.hooks.beforeCompile.tapPromise(pluginName, async () => {
      const isNextDev = compiler.options.mode === "development";
      const isBuild = compiler.options.mode === "production";

      if (isBuild) {
        await build();
      } else if (isNextDev && !devServerStarted.webpack) {
        devServerStarted.webpack = true;
        await build();
        await dev();
      }
    });
  },
  rspack(compiler) {
    compiler.hooks.beforeCompile.tapPromise(pluginName, async () => {
      const isNextDev = compiler.options.mode === "development";
      const isBuild = compiler.options.mode === "production";

      if (isBuild) {
        await build();
      } else if (isNextDev && !devServerStarted.rspack) {
        devServerStarted.rspack = true;
        await build();
        await dev();
      }
    });
  },
  esbuild: {
    setup(pluginBuild) {
      pluginBuild.onStart(async () => {
        await build();
        await dev();
      });
    },
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
