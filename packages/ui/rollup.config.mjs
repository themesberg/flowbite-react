import { $ } from "bun";
import glob from "fast-glob";
import del from "rollup-plugin-delete";
// import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import { rollupPluginUseClient } from "rollup-plugin-use-client";
import packageJson from "./package.json";

const componentEntries = await glob("src/components/**/index.ts");
const entries = ["src/index.ts", ...componentEntries];
// const entriesDts = {
//   index: entries[0],
//   ...componentEntries.reduce((acc, entry) => {
//     const key = entry.replace("src/", "").replace(".ts", "");
//     acc[key] = entry;
//     return acc;
//   }, {}),
// };
const external = [
  "react-icons/fa",
  "react-icons/hi",
  "react/jsx-runtime",
  ...Object.keys({
    ...packageJson.dependencies,
    ...packageJson.peerDependencies,
  }),
];
const outputDir = "lib";

/**
 * @type {import('rollup').RollupOptions}
 */
export default [
  {
    input: entries,
    output: [
      {
        format: "es",
        dir: `${outputDir}/esm`,
        entryFileNames: "[name].mjs",
        preserveModules: true,
        sourcemap: true,
      },
      {
        format: "cjs",
        dir: `${outputDir}/cjs`,
        entryFileNames: "[name].cjs",
        preserveModules: true,
        sourcemap: true,
      },
    ],
    external,
    plugins: [
      del({ targets: "lib/*" }),
      esbuild({
        sourceMap: false,
      }),
      rollupPluginUseClient(),
      generateDts(),
    ],
    onwarn(warning, warn) {
      if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
        return;
      }
      warn(warning);
    },
  },
  // {
  //   input: entriesDts,
  //   output: [
  //     {
  //       format: "es",
  //       dir: `${outputDir}/types`,
  //       preserveModules: true,
  //     },
  //   ],
  //   plugins: [
  //     dts({
  //       compilerOptions: {
  //         incremental: false,
  //       },
  //     }),
  //   ],
  // },
];

function generateDts() {
  return {
    name: "generate-dts",
    async buildEnd() {
      await $`tsc -p tsconfig.build.json`;
    },
  };
}
