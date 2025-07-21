import path from "path";

export const classListFile = "class-list.json";
export const configFile = "config.json";
export const gitIgnoreFile = ".gitignore";
export const initFile = "init.tsx";
export const outputDir = ".flowbite-react";
export const packageJsonFile = "package.json";
export const pluginName = "flowbiteReact";
export const pluginPath = "flowbite-react/plugin";
export const processIdFile = "pid";
export const vscodeDir = ".vscode";

export const classListFilePath = path.join(outputDir, classListFile);
export const configFilePath = path.join(outputDir, configFile);
export const gitIgnoreFilePath = path.join(outputDir, gitIgnoreFile);
export const initFilePath = path.join(outputDir, initFile);

export const excludeDirs = [
  ".astro",
  ".contentlayer",
  ".git",
  ".next",
  ".parcel-cache",
  ".turbo",
  ".vercel",
  ".vscode",
  "build",
  "coverage",
  "dist",
  "node_modules",
  "out",
  "storybook-static",
];

export const allowedExtensions = [".astro", ".js", ".jsx", ".md", ".mdx", ".ts", ".tsx"];

export const automaticClassGenerationMessage = `Components specified in ${configFilePath}. Automatic class generation is disabled.`;
