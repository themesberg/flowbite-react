import fs from "fs/promises";
import { klona } from "klona/json";
import { isEqual } from "../../helpers/is-equal";
import { COMPONENT_TO_CLASS_LIST_MAP } from "../../metadata/class-list";
import { configFilePath } from "../consts";
import { getTailwindVersion } from "../utils/get-tailwind-version";

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
 * Sets up the `.flowbite-react/config.json` file in the project.
 *
 * This function creates or updates the configuration file with default values and validates existing configurations.
 */
export async function setupConfig(): Promise<Config> {
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
  const writeTimeout = 10;

  try {
    const raw = await fs.readFile(configFilePath, "utf-8");
    const config: Config = JSON.parse(raw);
    let newConfig = klona(config);

    if (newConfig.$schema !== defaultConfig.$schema) {
      console.warn(`Invalid $schema in ${configFilePath}: ${newConfig.$schema}`);
      newConfig.$schema = defaultConfig.$schema;
    }
    if (!Array.isArray(newConfig.components)) {
      console.warn(`Invalid components in ${configFilePath}: ${newConfig.components}`);
      newConfig.components = defaultConfig.components;
    } else {
      const isValidComponent = (component: unknown) =>
        typeof component === "string" &&
        component.trim() !== "" &&
        (component === "*" ||
          COMPONENT_TO_CLASS_LIST_MAP[component as keyof typeof COMPONENT_TO_CLASS_LIST_MAP] !== undefined);

      if (newConfig.components.some((component) => !isValidComponent(component))) {
        console.warn(`Invalid components in ${configFilePath}: ${newConfig.components}`);
        newConfig.components = newConfig.components.filter(isValidComponent);
      }
    }
    if (typeof newConfig.dark !== "boolean") {
      console.warn(`Invalid dark in ${configFilePath}: ${newConfig.dark}`);
      newConfig.dark = defaultConfig.dark;
    }
    if (typeof newConfig.path !== "string") {
      console.warn(`Invalid path in ${configFilePath}: ${newConfig.path}`);
      newConfig.path = defaultConfig.path;
    }
    if (typeof newConfig.prefix !== "string") {
      console.warn(`Invalid prefix in ${configFilePath}: ${newConfig.prefix}`);
      newConfig.prefix = defaultConfig.prefix;
    }
    if (typeof newConfig.rsc !== "boolean") {
      console.warn(`Invalid rsc in ${configFilePath}: ${newConfig.rsc}`);
      newConfig.rsc = defaultConfig.rsc;
    }
    if (typeof newConfig.tsx !== "boolean") {
      console.warn(`Invalid tsx in ${configFilePath}: ${newConfig.tsx}`);
      newConfig.tsx = defaultConfig.tsx;
    }
    if (newConfig.version !== defaultConfig.version) {
      console.warn(`Invalid version in ${configFilePath}: ${newConfig.version}`);
      newConfig.version = defaultConfig.version;
    }

    for (const key in newConfig) {
      if (!(key in defaultConfig)) {
        console.warn(`Invalid property in ${configFilePath}: ${key}`);
        delete newConfig[key as keyof Config];
      }
    }

    const isSorted = isEqual(Object.keys(newConfig).sort(), Object.keys(newConfig));
    if (!isSorted) {
      console.warn(`Invalid keys order in ${configFilePath}`);
      newConfig = Object.fromEntries(Object.entries(newConfig).sort()) as Config;
    }

    if (!isEqual(config, newConfig) || !isSorted) {
      console.log(`Updating ${configFilePath} file...`);
      setTimeout(() => fs.writeFile(configFilePath, JSON.stringify(newConfig, null, 2)), writeTimeout);
    }

    return newConfig;
  } catch (error) {
    if (error instanceof Error && error.message.includes("ENOENT")) {
      console.log(`Creating ${configFilePath} file...`);
    } else {
      console.error(`Invalid ${configFilePath} file, regenerating...`);
    }

    setTimeout(() => fs.writeFile(configFilePath, JSON.stringify(defaultConfig, null, 2)), writeTimeout);
    return defaultConfig;
  }
}
