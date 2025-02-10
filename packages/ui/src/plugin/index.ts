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
  // TODO: verify
  rollup: {
    async buildStart() {
      await build();
      await dev();
    },
  },
  // TODO: verify
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
    setup(pluginBuild) {
      let registered = false;

      pluginBuild.onStart(async () => {
        if (!registered) {
          registered = true;
          await build();

          // assume production build when `initialOptions.minify = true`
          if (!pluginBuild.initialOptions.minify) {
            dev();
          }
        }
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
