import fs from "fs/promises";
import { classListFilePath } from "../consts";

export async function setupClassList() {
  try {
    await fs.access(classListFilePath);
  } catch {
    console.log(`Creating ${classListFilePath} file...`);
    await fs.writeFile(classListFilePath, JSON.stringify([], null, 2), { flag: "w" });
  }
}
