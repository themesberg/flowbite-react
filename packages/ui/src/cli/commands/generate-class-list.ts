import fs from "fs/promises";
import { classListFilePath, excludeDirs } from "../consts";
import { buildClassList } from "../utils/build-class-list";
import { extractComponentImports } from "../utils/extract-component-imports";
import { findFiles } from "../utils/find-files";
import { getConfig } from "../utils/get-config";

export async function generateClassList() {
  try {
    const config = await getConfig();

    if (!config.components.length) {
      const files = await findFiles({
        patterns: ["**/*.astro", "**/*.js", "**/*.jsx", "**/*.md", "**/*.mdx", "**/*.ts", "**/*.tsx"],
        excludeDirs,
      });
      const importedComponents = new Set<string>();

      for (const file of files) {
        const content = await fs.readFile(file, "utf-8");

        for (const component of extractComponentImports(content)) {
          importedComponents.add(component);
        }
      }

      if (importedComponents.size > 0) {
        config.components = [...importedComponents];
      }
    }

    const classList = buildClassList(config);

    console.log(`Generating ${classListFilePath} file...`);
    await fs.writeFile(classListFilePath, JSON.stringify(classList, null, 2), { flag: "w" });
  } catch (error) {
    console.error(`Failed to generate ${classListFilePath}:`, error);
  }
}
