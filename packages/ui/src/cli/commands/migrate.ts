import * as fs from "fs/promises";
import * as path from "path";
import { compoundComponentsTransformer } from "../transformers/compound-components";
import { findFiles } from "../utils/find-files";

export interface TransformResult {
  content: string;
  changed: boolean;
}

export interface Transformer {
  name: string;
  transform: (content: string) => TransformResult;
}

const transformers: Transformer[] = [
  compoundComponentsTransformer,
  // Add more transformers as needed
];

export async function migrate(): Promise<void> {
  console.log("🔄 Running code transformations...");

  try {
    const files = await findFiles({
      patterns: ["**/*.tsx", "**/*.jsx", "**/*.ts", "**/*.js"],
      excludeDirs: ["node_modules", "dist"],
    });

    let totalUpdatedFiles = 0;
    let totalSkippedFiles = 0;

    for (const transformer of transformers) {
      console.log(`\n📝 Running ${transformer.name} transformer...`);
      let updatedFiles = 0;
      let skippedFiles = 0;
      let processedFiles = 0;
      const totalFiles = files.length;

      for (const file of files) {
        processedFiles++;
        if (processedFiles % 50 === 0 || processedFiles === totalFiles) {
          process.stdout.write(
            `\rProcessing: ${processedFiles}/${totalFiles} files (${Math.round((processedFiles / totalFiles) * 100)}%)`,
          );
        }
        try {
          const content = await fs.readFile(file, "utf-8");
          const result = transformer.transform(content);

          if (result.changed) {
            await fs.writeFile(file, result.content, "utf-8");
            console.log(`✓ Updated ${path.relative(process.cwd(), file)}`);
            updatedFiles++;
          }
        } catch (_error) {
          skippedFiles++;
          console.error(`Could not process ${path.relative(process.cwd(), file)}`);
        }
      }

      if (skippedFiles > 0) {
        console.log(`\nℹ️  Skipped ${skippedFiles} file${skippedFiles === 1 ? "" : "s"} due to parsing errors`);
      }

      if (updatedFiles > 0) {
        console.log(
          `\n✨ Successfully transformed ${updatedFiles} file${updatedFiles === 1 ? "" : "s"} with ${transformer.name}`,
        );
      } else if (skippedFiles === 0) {
        console.log(`\n✨ No files needed transformation with ${transformer.name}`);
      }

      totalUpdatedFiles += updatedFiles;
      totalSkippedFiles += skippedFiles;
    }

    console.log("\n📊 Migration Summary:");
    console.log(`Total files updated: ${totalUpdatedFiles}`);
    console.log(`Total files skipped: ${totalSkippedFiles}`);
  } catch (error) {
    console.error("Error during migration:", error);
    process.exit(1);
  }
}
