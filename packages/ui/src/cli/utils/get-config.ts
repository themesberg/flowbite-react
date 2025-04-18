import fs from "fs/promises";
import { configFilePath } from "../consts";

export interface Config {
  $schema: string;
  components: string[];
  dark: boolean;
  path: string;
  prefix: string;
  rsc: boolean;
  tsx: boolean;
  version: 3 | 4;
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
    dark: true,
    path: "src/components",
    prefix: "",
    rsc: true,
    tsx: true,
    version: 4,
  };

  try {
    const raw = await fs.readFile(configFilePath, "utf-8");
    const parsed: Config = JSON.parse(raw);

    if (parsed.$schema !== undefined && typeof parsed.$schema === "string") {
      config.$schema = parsed.$schema;
    }
    if (parsed.components !== undefined && Array.isArray(parsed.components)) {
      config.components = parsed.components.map((component) => component.trim()).filter(Boolean);
    }
    if (parsed.dark !== undefined && typeof parsed.dark === "boolean") {
      config.dark = parsed.dark;
    }
    if (parsed.path !== undefined && typeof parsed.path === "string") {
      config.path = parsed.path;
    }
    if (parsed.prefix !== undefined && typeof parsed.prefix === "string") {
      config.prefix = parsed.prefix;
    }
    if (parsed.rsc !== undefined && typeof parsed.rsc === "boolean") {
      config.rsc = parsed.rsc;
    }
    if (parsed.tsx !== undefined && typeof parsed.tsx === "boolean") {
      config.tsx = parsed.tsx;
    }
    if (parsed.version !== undefined && typeof parsed.version === "number") {
      config.version = parsed.version;
    }

    return config;
  } catch {
    return config;
  }
}
