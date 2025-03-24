import fs from "fs/promises";
import cjson from "comment-json";
import { packageJsonFile } from "../consts";
import { getPackageJson } from "../utils/get-package-json";

export async function setupPatch() {
  try {
    const patchCommand = "flowbite-react patch";
    const packageJson = await getPackageJson();

    if (!packageJson.scripts) {
      packageJson.scripts = {};
    }

    if (!packageJson.scripts.postinstall?.includes(patchCommand)) {
      console.log(`Adding postinstall patch script to ${packageJsonFile}...`);
      if (packageJson.scripts.postinstall) {
        packageJson.scripts.postinstall += ` && ${patchCommand}`;
      } else {
        packageJson.scripts.postinstall = patchCommand;
      }
      await fs.writeFile(packageJsonFile, cjson.stringify(packageJson, null, 2), { flag: "w" });
    }
  } catch (error) {
    console.error(`Failed to setup ${packageJsonFile}:`, error);
  }
}
