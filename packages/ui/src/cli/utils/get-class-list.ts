import fs from "fs/promises";
import { classListFilePath } from "../consts";

/**
 * Reads the class list file and returns its content as an array of strings.
 *
 * This function attempts to read the file specified by `classListFilePath`, parse its content as JSON,
 * and return the parsed array. If the file cannot be read or parsed, an empty array is returned.
 *
 * @returns {Promise<string[]>} A promise that resolves to an array of strings representing the class list.
 */
export async function getClassList(): Promise<string[]> {
  try {
    return JSON.parse(await fs.readFile(classListFilePath, "utf-8")) ?? [];
  } catch {
    return [];
  }
}
