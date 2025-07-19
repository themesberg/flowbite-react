import fs from "fs/promises";
import path from "path";
import { classListFile, outputDir, processIdFile } from "../consts";

/**
 * Sets up the `.flowbite-react/.gitignore` file in the project.
 *
 * This function checks if the `.gitignore` file exists in the `.flowbite-react` directory
 * and adds the necessary files to it if they are not already present.
 */
export async function setupGitIgnore() {
  const gitIgnoreFilePath = path.join(outputDir, ".gitignore");

  try {
    const gitignore = await fs.readFile(gitIgnoreFilePath, "utf-8").catch(() => {
      console.log(`Creating ${gitIgnoreFilePath} file...`);
      return "";
    });

    if (![classListFile, processIdFile].some((file) => gitignore.includes(file))) {
      console.log(`Adding ${classListFile}, ${processIdFile} to ${gitIgnoreFilePath}...`);
      await fs.writeFile(gitIgnoreFilePath, `${classListFile}\n${processIdFile}`);
    }
  } catch (error) {
    console.error(`Failed to update ${gitIgnoreFilePath}:`, error);
  }
}
