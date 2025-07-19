import fs from "fs/promises";
import { classListFilePath } from "../consts";

/**
 * Sets up the `.flowbite-react/class-list.json` file in the project.
 *
 * This function checks if the `.flowbite-react/class-list.json` file exists and creates it if it does not.
 */
export async function setupClassList() {
  try {
    await fs.access(classListFilePath);
  } catch {
    console.log(`Creating ${classListFilePath} file...`);
    await fs.writeFile(classListFilePath, JSON.stringify([], null, 2));
  }
}
