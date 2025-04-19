import fs from "fs/promises";
import { configFilePath } from "../consts";
import type { Config } from "../utils/get-config";
import { getTailwindVersion } from "../utils/get-tailwind-version";

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
      version: await getTailwindVersion(),
    };
    console.log(`Creating ${configFilePath} file...`);
    await fs.writeFile(configFilePath, JSON.stringify(defaultConfig, null, 2), { flag: "w" });
  }
}
