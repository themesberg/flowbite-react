import fs from "fs/promises";
import path from "path";
import { classListFilePath, excludeDirs, pluginName, pluginPath } from "../consts";
import { addImport } from "../utils/add-import";
import { addToConfig } from "../utils/add-to-config";
import { findFiles } from "../utils/find-files";
import { joinNormalizedPath } from "../utils/normalize-path";

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
      const lines = content.split("\n");

      let tailwindImportIndex = -1;
      let quoteType = '"';

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const singleQuoteMatch = line.match(/@import\s+'tailwindcss'/);
        const doubleQuoteMatch = line.match(/@import\s+"tailwindcss"/);

        if (singleQuoteMatch || doubleQuoteMatch) {
          tailwindImportIndex = i;
          quoteType = singleQuoteMatch ? "'" : '"';

          if (!line.trim().endsWith(";")) {
            lines[i] = line + ";";
          }

          break;
        }
      }

      if (tailwindImportIndex === -1) {
        continue;
      }

      found = true;

      const pluginDirectivePath = joinNormalizedPath(pluginPath, "tailwindcss");
      const sourceDirectivePath = path
        .join(path.relative(path.dirname(file), process.cwd()), classListFilePath)
        .replace(/\\/g, "/");

      const pluginRegex = new RegExp(
        `@plugin\\s+['"](${pluginDirectivePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})['"](;|\\s|$)`,
      );
      const sourceRegex = new RegExp(
        `@source\\s+['"](${sourceDirectivePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})['"](;|\\s|$)`,
      );

      const hasPluginDirective = pluginRegex.test(content);
      const hasSourceDirective = sourceRegex.test(content);

      if (hasPluginDirective && hasSourceDirective) {
        continue;
      }

      const directivesToAdd = [];
      if (!hasPluginDirective) {
        const pluginDirective = `@plugin ${quoteType}${pluginDirectivePath}${quoteType};`;
        directivesToAdd.push(pluginDirective);
      }
      if (!hasSourceDirective) {
        const sourceDirective = `@source ${quoteType}${sourceDirectivePath}${quoteType};`;
        directivesToAdd.push(sourceDirective);
      }

      lines.splice(tailwindImportIndex + 1, 0, ...directivesToAdd);

      const updatedContent = lines.join("\n");

      console.log(`Updating ${file} with flowbite-react configuration...`);
      await fs.writeFile(file, updatedContent, "utf-8");
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
        importPath: joinNormalizedPath(pluginPath, "tailwindcss"),
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
    return false;
  }
}
