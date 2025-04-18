import fs from "fs/promises";
import tailwindcssPackageJson from "tailwindcss/package.json";
import { configFilePath } from "../consts";
import type { Config } from "../utils/get-config";

/**
 * Sets up the `.flowbite-react/config.json` file in the project.
 *
 * This function checks if the `.flowbite-react/config.json` file exists and creates it if it does not.
 */
export async function setupConfig() {
  try {
    await fs.access(configFilePath);
  } catch {
    const defaultConfig: Config = {
      $schema: "https://unpkg.com/flowbite-react/schema.json",
      components: [],
      dark: true,
      path: "src/components",
      // TODO: infer from project
      prefix: "",
      rsc: true,
      tsx: true,
      version: parseInt(tailwindcssPackageJson.version.split(".")[0], 10) as 3 | 4,
    };
    console.log(`Creating ${configFilePath} file...`);
    await fs.writeFile(configFilePath, JSON.stringify(defaultConfig, null, 2), { flag: "w" });
  }
}
