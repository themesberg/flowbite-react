import fs from "fs/promises";
import path from "path";
import { classListFile, classListFilePath, excludeDirs, outputDir, pluginName, pluginPath } from "../consts";
import { addImport } from "../utils/add-import";
import { addToConfig } from "../utils/add-to-config";
import { findFiles } from "../utils/find-files";

export async function setupTailwind() {
  try {
    const found = !!((await setupTailwindV4()) || (await setupTailwindV3()));

    if (!found) {
      console.warn("Missing Tailwind CSS configuration file.");
    }
  } catch (error) {
    console.error("Failed to setup Tailwind:", error);
  }
}

async function setupTailwindV4() {
  try {
    const cssFiles = await findFiles({
      patterns: ["**/*.css", "**/*.less", "**/*.sass", "**/*.scss"],
      excludeDirs,
    });

    let found = false;

    for (const file of cssFiles) {
      const content = await fs.readFile(file, "utf-8");

      const hasImportWithSingleQuotes = content.includes(`@import 'tailwindcss'`);
      const hasImportWithDoubleQuotes = content.includes(`@import "tailwindcss"`);

      if (hasImportWithSingleQuotes || hasImportWithDoubleQuotes) {
        found = true;

        const tailwindPluginPath = path.join(pluginPath, "tailwindcss");
        const quoteType = hasImportWithSingleQuotes ? "'" : '"';

        const relativePath = path.relative(path.dirname(file), process.cwd());
        const sourceImportPath = path.join(relativePath, outputDir, classListFile).replace(/\\/g, "/");

        const hasPlugin = content.includes(`@plugin ${quoteType}${tailwindPluginPath}${quoteType}`);
        const hasSource = content.includes(`@source ${quoteType}${sourceImportPath}${quoteType}`);

        if (hasPlugin && hasSource) {
          continue;
        }

        const targetIndex = hasImportWithSingleQuotes
          ? content.indexOf(`@import 'tailwindcss'`)
          : content.indexOf(`@import "tailwindcss"`);
        const importLength = hasImportWithSingleQuotes
          ? `@import 'tailwindcss'`.length
          : `@import "tailwindcss"`.length;
        const nextLineIndex = content.indexOf("\n", targetIndex);
        const insertPosition = nextLineIndex === -1 ? targetIndex + importLength : nextLineIndex;

        let insertContent = "";
        if (!hasPlugin) {
          insertContent += `\n@plugin ${quoteType}${tailwindPluginPath}${quoteType};`;
        }
        if (!hasSource) {
          insertContent += `\n@source ${quoteType}${sourceImportPath}${quoteType};`;
        }

        const updatedContent = content.slice(0, insertPosition) + insertContent + "\n" + content.slice(insertPosition);

        if (insertContent) {
          console.log(`Updating ${file} with flowbite-react configuration...`);
          await fs.writeFile(file, updatedContent, "utf-8");
        }
      }
    }

    return found;
  } catch (error) {
    console.error("Failed to setup Tailwind CSS v4:", error);
  }
}

async function setupTailwindV3() {
  try {
    const configFiles = await findFiles({
      patterns: [
        "tailwind.config.cjs",
        "tailwind.config.js",
        "tailwind.config.mjs",
        "tailwind.config.mts",
        "tailwind.config.ts",
      ],
      excludeDirs,
    });

    for (const configFile of configFiles) {
      const content = await fs.readFile(configFile, "utf-8");

      let updatedContent = addImport({
        content,
        importName: pluginName,
        importPath: path.join(pluginPath, "tailwindcss"),
      });

      updatedContent = addToConfig({
        content: updatedContent,
        targetPath: "content",
        valueGenerator: (b) => b.stringLiteral(classListFilePath),
      });

      updatedContent = addToConfig({
        content: updatedContent,
        targetPath: "plugins",
        valueGenerator: (b) => b.identifier(pluginName),
      });

      if (updatedContent !== content) {
        console.log(`Updating ${configFile} with flowbite-react configuration...`);
        await fs.writeFile(configFile, updatedContent, "utf-8");
      }
      break;
    }

    return !!configFiles.length;
  } catch (error) {
    console.error("Failed to setup Tailwind CSS v3:", error);
  }
}
