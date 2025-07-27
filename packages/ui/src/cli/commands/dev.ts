import fs from "fs/promises";
import { basename } from "path";
import chokidar from "chokidar";
import { isEqual } from "../../helpers/is-equal";
import {
  allowedExtensions,
  automaticClassGenerationMessage,
  classListFilePath,
  configFilePath,
  excludeDirs,
  gitIgnoreFilePath,
  initFilePath,
  initJsxFilePath,
} from "../consts";
import { buildClassList } from "../utils/build-class-list";
import { createInitLogger } from "../utils/create-init-logger";
import { extractComponentImports } from "../utils/extract-component-imports";
import { findFiles } from "../utils/find-files";
import { getClassList } from "../utils/get-class-list";
import { getConfig } from "../utils/get-config";
import { setupGitIgnore } from "./setup-gitignore";
import { setupInit } from "./setup-init";
import { setupOutputDirectory } from "./setup-output-directory";

export async function dev() {
  await setupOutputDirectory();
  let config = await getConfig();
  await setupInit(config);
  const initLogger = createInitLogger(config);

  if (config.components.length) {
    console.warn(automaticClassGenerationMessage);
  }

  const importedComponentsMap: Record<string, string[]> = {};
  let classList = await getClassList();

  // initial run
  const files = await findFiles({
    patterns: allowedExtensions.map((ext) => `**/*${ext}`),
    excludeDirs,
  });

  for (const file of files) {
    const content = await fs.readFile(file, "utf-8");
    const componentImports = extractComponentImports(content);
    initLogger.check(file, content);

    if (componentImports.length) {
      importedComponentsMap[file] = componentImports;
    }
  }

  initLogger.log();

  const newImportedComponents = [...new Set(Object.values(importedComponentsMap).flat())];
  const newClassList = buildClassList({
    components: config.components.length ? config.components : newImportedComponents,
    dark: config.dark,
    prefix: config.prefix,
    version: config.version,
  });

  if (!isEqual(classList, newClassList)) {
    classList = newClassList;
    await fs.writeFile(classListFilePath, JSON.stringify(classList, null, 2));
  }

  // watch for changes
  async function handleChange(path: string, eventName: "change" | "unlink") {
    if ([configFilePath, initFilePath, initJsxFilePath].includes(path)) {
      config = await getConfig();
      await setupInit(config);
      initLogger.config = config;
    }
    if (path === gitIgnoreFilePath) {
      await setupGitIgnore();
    }

    if (eventName === "change") {
      const content = await fs.readFile(path, "utf-8");
      const componentImports = extractComponentImports(content);
      initLogger.check(path, content);

      if (componentImports.length) {
        importedComponentsMap[path] = componentImports;
      } else {
        delete importedComponentsMap[path];
      }
    }
    if (eventName === "unlink") {
      delete importedComponentsMap[path];
      initLogger.checkedMap.delete(path);
    }

    initLogger.log();

    const newImportedComponents = [...new Set(Object.values(importedComponentsMap).flat())];

    const newClassList = buildClassList({
      components: config.components.length ? config.components : newImportedComponents,
      dark: config.dark,
      prefix: config.prefix,
      version: config.version,
    });

    if (!isEqual(classList, newClassList)) {
      classList = newClassList;
      await fs.writeFile(classListFilePath, JSON.stringify(classList, null, 2));
    }
  }

  const watcher = chokidar.watch(".", {
    ignored: (path, stats) => {
      if (stats?.isDirectory()) {
        return excludeDirs.includes(basename(path));
      }
      if (stats?.isFile()) {
        return !allowedExtensions
          .concat(configFilePath, gitIgnoreFilePath, initFilePath, initJsxFilePath)
          .some((ext) => path.endsWith(ext));
      }
      return false;
    },
    ignoreInitial: true,
  });

  watcher.on("add", (path) => handleChange(path, "change"));
  watcher.on("change", (path) => handleChange(path, "change"));
  watcher.on("unlink", (path) => handleChange(path, "unlink"));
}
