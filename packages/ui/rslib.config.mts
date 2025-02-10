import type { RsbuildPlugin } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { RsdoctorRspackPlugin } from "@rsdoctor/rspack-plugin";
import { defineConfig } from "@rslib/core";
import { $, Glob } from "bun";

/**
 * TODO:
 * - ignore `"!./src/metadata"`
 * - dev mode acts weird when TS checks crash
 */

const outputDir = "./dist";

export default defineConfig({
  source: {
    entry: {
      index: ["./src/**", "!**/*.test.*"],
    },
    // tsconfigPath: "./tsconfig.build.json",
  },
  lib: [
    {
      bundle: false,
      format: "cjs",
      output: {
        filename: {
          js: "[name].cjs",
        },
      },
      // plugins: [
      //   pluginDts({
      //     bundle: false,
      //     // distPath: "dist/types",
      //     dtsExtension: ".d.ts",
      //   }),
      // ],
    },
    {
      bundle: false,
      format: "esm",
      output: {
        filename: {
          js: "[name].mjs",
        },
      },
      // plugins: [
      //   pluginDts({
      //     bundle: false,
      //     // distPath: "dist/types",
      //     dtsExtension: ".d.mts",
      //   }),
      // ],
    },
  ],
  tools: {
    rspack: {
      plugins: [process.env.RSDOCTOR && new RsdoctorRspackPlugin()].filter(Boolean),
    },
  },
  output: {
    distPath: {
      root: outputDir,
    },
    sourceMap: true,
  },
  plugins: [pluginReact(), generateMetadata(), generateDts()],
});

function generateMetadata(): RsbuildPlugin {
  return {
    name: "generate-metadata",
    setup(api) {
      api.onBeforeBuild(async () => {
        await $`bun run generate-metadata`;
      });
    },
  };
}

function generateDts(): RsbuildPlugin {
  return {
    name: "generate-dts",
    setup(api) {
      api.onAfterBuild(async () => {
        // generate `.d.ts` files
        await $`tsc -p tsconfig.build.json --outDir ${outputDir}`;

        // generate `.d.mts` files
        for await (const path of new Glob(`${outputDir}/**/*.d.ts`).scan()) {
          const file = Bun.file(path);
          const content = await file.text();

          await Bun.write(path.replace(".d.ts", ".d.mts"), content);
          // fix incorrect default export
          // https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FalseExportDefault.md
          await Bun.write(path, content.replace("export default _default", "export = _default"));
        }
      });
    },
  };
}
