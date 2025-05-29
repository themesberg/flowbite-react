import fs from "fs/promises";
import path from "path";
import { configFilePath } from "../consts";
import { getConfig } from "./get-config";
import { getTailwindVersion } from "./get-tailwind-version";

/**
 * Detects the installed Tailwind CSS major version and updates the local
 * `.flowbite-react/config.json` file if the version is missing or out of sync.
 */
export async function syncTailwindVersion(): Promise<void> {
  try {
    const detectedVersion = await getTailwindVersion();
    const config = await getConfig();

    if (config.version !== detectedVersion) {
      console.log(
        `Tailwind CSS version mismatch (Detected: ${detectedVersion}, Config: ${config.version}). Updating ${configFilePath}...`,
      );
      config.version = detectedVersion;

      try {
        await fs.mkdir(path.dirname(configFilePath), { recursive: true });
        await fs.writeFile(configFilePath, JSON.stringify(config, null, 2), { flag: "w" });
        console.log(`Successfully updated ${configFilePath} with Tailwind CSS version ${detectedVersion}.`);
      } catch (writeError) {
        console.error(`Error writing updated configuration to ${configFilePath}:`, writeError);
        throw writeError;
      }
    }
  } catch (error) {
    console.error("Error syncing Tailwind CSS version:", error);
  }
}
