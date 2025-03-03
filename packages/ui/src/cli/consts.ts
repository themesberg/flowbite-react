import path from "path";

export const pluginName = "flowbiteReact";
export const pluginPath = "flowbite-react/plugin";
export const classListFile = "class-list.json";
export const configFile = "config.json";
export const outputDir = ".flowbite-react";
export const packageJsonFile = "package.json";
export const processIdFile = "pid";
export const vscodeDir = ".vscode";

export const classListFilePath = path.join(outputDir, classListFile);
export const configFilePath = path.join(outputDir, configFile);

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

export const automaticClassGenerationMessage = `Components specified in ${configFilePath}. Automatic class generation is disabled.`;
