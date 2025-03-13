import fs from "fs/promises";
import path from "path";
import { classListFile, outputDir, processIdFile } from "../consts";

export async function setupGitIgnore() {
  const gitIgnoreFilePath = path.join(outputDir, ".gitignore");

  try {
    const gitignore = await fs.readFile(gitIgnoreFilePath, "utf-8").catch(() => {
      console.log(`Creating ${gitIgnoreFilePath} file...`);
      return "";
    });

    if (![classListFile, processIdFile].some((file) => gitignore.includes(file))) {
      console.log(`Adding ${classListFile}, ${processIdFile} to ${gitIgnoreFilePath}...`);
      await fs.writeFile(gitIgnoreFilePath, `${classListFile}\n${processIdFile}`, { flag: "w" });
    }
  } catch (error) {
    console.error(`Failed to update ${gitIgnoreFilePath}:`, error);
  }
}
