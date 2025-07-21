import fs from "fs/promises";
import { allowedExtensions, automaticClassGenerationMessage, classListFilePath, excludeDirs } from "../consts";
import { buildClassList } from "../utils/build-class-list";
import { extractComponentImports } from "../utils/extract-component-imports";
import { findFiles } from "../utils/find-files";
import { getConfig } from "../utils/get-config";
import { setupInit } from "./setup-init";
import { setupOutputDirectory } from "./setup-output-directory";

export async function build() {
  await setupOutputDirectory();

  try {
    const config = await getConfig();
    await setupInit(config);

    const importedComponents: string[] = [];

    if (config.components.length) {
      console.warn(automaticClassGenerationMessage);
    } else {
      const files = await findFiles({
        patterns: allowedExtensions.map((ext) => `**/*${ext}`),
        excludeDirs,
      });

      for (const file of files) {
        const content = await fs.readFile(file, "utf-8");
        const components = extractComponentImports(content);

        if (components.length) {
          importedComponents.push(...components);
        }
      }
    }

    const classList = buildClassList({
      components: config.components.length ? config.components : [...new Set(importedComponents)],
      dark: config.dark,
      prefix: config.prefix,
      version: config.version,
    });

    console.log(`Generating ${classListFilePath} file...`);
    await fs.writeFile(classListFilePath, JSON.stringify(classList, null, 2));
  } catch (error) {
    console.error(`Failed to generate ${classListFilePath}:`, error);
  }
}
