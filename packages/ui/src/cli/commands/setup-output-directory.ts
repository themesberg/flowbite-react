import fs from "fs/promises";
import { outputDir } from "../consts";

export async function setupOutputDirectory() {
  try {
    await fs.access(outputDir);
  } catch {
    console.log(`Creating ${outputDir} directory...`);
    await fs.mkdir(outputDir, { recursive: true });
  }
}
