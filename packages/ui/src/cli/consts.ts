import type { Config } from "./utils";

export const classListFile = "class-list.json";
export const configFile = "flowbite-react.json";
export const outputDir = ".flowbite-react";
export const processIdFile = "pid";
export const vscodeDir = ".vscode";

export const excludeDirs = [
  ".contentlayer",
  ".git",
  ".next",
  ".turbo",
  ".vercel",
  "build",
  "coverage",
  "dist",
  "node_modules",
  "out",
  "storybook-static",
];

export const defaultConfig: Config = {
  components: [],
  prefix: "",
};

export const automaticClassGenerationMessage = `Components specified in ${configFile}. Automatic class generation is disabled.`;
