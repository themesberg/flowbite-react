import fs from "fs/promises";
import cjson from "comment-json";
import { packageJsonFile } from "../consts";
import { getPackageJson } from "../utils/get-package-json";

/**
 * Sets up the register script in the project's package.json file.
 *
 * This function checks if the postinstall script already exists in the package.json file.
 * If it does not exist, it adds the register command to the postinstall script.
 * If it does exist, it appends the register command to the existing postinstall script.
 */
export async function setupRegister() {
  try {
    const registerCommand = "flowbite-react register";
    const packageJson = await getPackageJson();

    if (!packageJson.scripts) {
      packageJson.scripts = {};
    }

    if (!packageJson.scripts.postinstall?.includes(registerCommand)) {
      console.log(`Adding postinstall register script to ${packageJsonFile}...`);
      if (packageJson.scripts.postinstall) {
        packageJson.scripts.postinstall += ` && ${registerCommand}`;
      } else {
        packageJson.scripts.postinstall = registerCommand;
      }
      await fs.writeFile(packageJsonFile, cjson.stringify(packageJson, null, 2), { flag: "w" });
    }
  } catch (error) {
    console.error(`Failed to setup ${packageJsonFile}:`, error);
  }
}
