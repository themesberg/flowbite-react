import fs from "fs/promises";
import { configFilePath } from "../consts";
import type { Config } from "../utils/get-config";

export async function setupConfig() {
  try {
    await fs.access(configFilePath);
  } catch {
    const defaultConfig: Config = {
      $schema: "https://unpkg.com/flowbite-react/schema.json",
      components: [],
      dark: true,
      prefix: "",
      path: "src/components",
      tsx: true,
      rsc: true,
    };
    console.log(`Creating ${configFilePath} file...`);
    await fs.writeFile(configFilePath, JSON.stringify(defaultConfig, null, 2), { flag: "w" });
  }
}
