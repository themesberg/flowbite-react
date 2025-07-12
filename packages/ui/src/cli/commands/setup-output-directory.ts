import fs from "fs/promises";
import { outputDir } from "../consts";

/**
 * Sets up the `.flowbite-react` directory in the project.
 *
 * This function checks if the `.flowbite-react` directory exists and creates it if it does not.
 */
export async function setupOutputDirectory() {
  try {
    await fs.access(outputDir);
  } catch {
    console.log(`Creating ${outputDir} directory...`);
    await fs.mkdir(outputDir, { recursive: true });
  }
}
