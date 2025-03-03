import fs from "fs/promises";
import cjson from "comment-json";
import { packageJsonFile } from "../consts";

export interface PackageJson {
  name: string;
  version: string;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  scripts: Record<string, string>;
}
/**
 * Reads and parses the package.json file.
 *
 * This function attempts to read the package.json file specified by `packageJsonFile`, parse its content as JSON,
 * and return the parsed object. If the file cannot be read or parsed, it logs an error message and exits the process.
 *
 * @returns {Promise<any>} A promise that resolves to the parsed package.json object.
 */
export async function getPackageJson(): Promise<PackageJson> {
  try {
    return cjson.parse(await fs.readFile(packageJsonFile, "utf-8")) as unknown as PackageJson;
  } catch {
    console.error(`Unable to find ${packageJsonFile}.`);
    process.exit(1);
  }
}
