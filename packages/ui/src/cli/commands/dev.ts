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
} from "../consts";
import { buildClassList } from "../utils/build-class-list";
import { extractComponentImports } from "../utils/extract-component-imports";
import { getClassList } from "../utils/get-class-list";
import { getConfig } from "../utils/get-config";
import { setupOutputDirectory } from "./setup-output-directory";

export async function dev() {
  await setupOutputDirectory();

  const config = await getConfig();
  if (config.components.length) {
    console.warn(automaticClassGenerationMessage);
  }

  const importedComponentsMap: Record<string, string[]> = {};
  let classList = await getClassList();

  async function handleChange(path: string, eventName: "change" | "unlink") {
    if (eventName === "change") {
      const content = await fs.readFile(path, "utf-8");
      const componentImports = extractComponentImports(content);

      if (componentImports.length) {
        importedComponentsMap[path] = componentImports;
      } else {
        delete importedComponentsMap[path];
      }
    }
    if (eventName === "unlink") {
      delete importedComponentsMap[path];
    }

    const newImportedComponents = [...new Set(Object.values(importedComponentsMap).flat())];

    const config = await getConfig();
    const newClassList = buildClassList({
      components: config.components.length ? config.components : newImportedComponents,
      dark: config.dark,
      prefix: config.prefix,
      version: config.version,
    });

    if (!isEqual(classList, newClassList)) {
      classList = newClassList;
      await fs.writeFile(classListFilePath, JSON.stringify(classList, null, 2), { flag: "w" });
    }
  }

  const watcher = chokidar.watch(".", {
    ignored: (path, stats) => {
      if (stats?.isDirectory()) {
        return excludeDirs.includes(basename(path));
      }
      if (stats?.isFile()) {
        return !allowedExtensions.concat(configFilePath).some((ext) => path.endsWith(ext));
      }
      return false;
    },
  });

  watcher.on("add", (path) => handleChange(path, "change"));
  watcher.on("change", (path) => handleChange(path, "change"));
  watcher.on("unlink", (path) => handleChange(path, "unlink"));
}
