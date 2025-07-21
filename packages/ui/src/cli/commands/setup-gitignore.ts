import fs from "fs/promises";
import { classListFile, gitIgnoreFilePath, processIdFile } from "../consts";

/**
 * Sets up the `.flowbite-react/.gitignore` file in the project.
 *
 * This function ensures the `.gitignore` file exists in the `.flowbite-react` directory.
 * It will create or update the file if needed.
 */
export async function setupGitIgnore() {
  const content = `${classListFile}\n${processIdFile}`;

  try {
    let currentContent: string;
    try {
      currentContent = await fs.readFile(gitIgnoreFilePath, "utf-8");
    } catch {
      currentContent = "";
    }

    if (currentContent.trimEnd() !== content) {
      console.log(`${currentContent ? "Updating" : "Creating"} ${gitIgnoreFilePath} file...`);
      setTimeout(() => fs.writeFile(gitIgnoreFilePath, content), 10);
    }
  } catch (error) {
    console.error(`Failed to update ${gitIgnoreFilePath}:`, error);
  }
}
