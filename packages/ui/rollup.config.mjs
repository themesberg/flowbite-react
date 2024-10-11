import json from "@rollup/plugin-json";
import { $ } from "bun";
import glob from "fast-glob";
import { rimraf } from "rimraf";
import esbuild from "rollup-plugin-esbuild";
import { rollupPluginUseClient } from "rollup-plugin-use-client";
import packageJson from "./package.json";

const componentEntries = await glob("src/components/**/index.ts");
const entries = ["src/index.ts", "src/tailwind.ts", ...componentEntries];
const external = [
  "flowbite/plugin",
  "react/jsx-runtime",
  "tailwindcss/plugin",
  new RegExp("react-icons/*"),
  ...Object.keys({
    ...packageJson.dependencies,
    ...packageJson.peerDependencies,
  }),
];
const outputDir = "dist";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
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
    json(),
    cleanOutputDir(),
    generateClassList(),
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
  watch: {
    exclude: "src/class-list.json",
  },
};

function cleanOutputDir() {
  return {
    name: "clean-output-dir",
    async buildStart() {
      await rimraf(outputDir);
      await $`mkdir ${outputDir}`;
    },
  };
}

function generateClassList() {
  return {
    name: "generate-classlist",
    async buildStart() {
      await $`bun run generate-classlist`;
    },
  };
}

function generateDts() {
  return {
    name: "generate-dts",
    async closeBundle() {
      await $`tsc -p tsconfig.build.json --outDir ${outputDir}/types`;
    },
  };
}
