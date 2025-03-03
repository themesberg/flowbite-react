import fs from "fs/promises";
import { configFilePath } from "../consts";

export interface Config {
  $schema: string;
  components: string[];
  prefix: string;
}

/**
 * Reads the configuration file and returns its content as a Config object.
 *
 * This function attempts to read the file specified by `configFilePath`, parse its content as JSON,
 * and return the parsed configuration. If the file cannot be read or parsed, a default Config object is returned.
 *
 * @returns {Promise<Config>} A promise that resolves to a Config object representing the configuration.
 */
export async function getConfig(): Promise<Config> {
  const config: Config = {
    $schema: "",
    components: [],
    prefix: "",
  };

  try {
    const raw = await fs.readFile(configFilePath, "utf-8");
    const parsed: Config = JSON.parse(raw);

    if (parsed.$schema !== undefined && typeof parsed.$schema === "string") {
      config.$schema = parsed.$schema;
    }
    if (parsed.prefix !== undefined && typeof parsed.prefix === "string") {
      config.prefix = parsed.prefix;
    }
    if (parsed.components !== undefined && Array.isArray(parsed.components)) {
      config.components = parsed.components.map((component) => component.trim()).filter(Boolean);
    }

    return config;
  } catch {
    return config;
  }
}
