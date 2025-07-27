import { configFilePath, initFilePath, initJsxFilePath } from "../consts";
import { createConfig, type Config } from "./create-config";

/**
 * Creates a logger to track and warn about `<ThemeInit />` component usage.
 *
 * @param {Config} config - The configuration object used to check
 */
export function createInitLogger(config: Config) {
  const defaultConfig = createConfig();

  return {
    config,
    checkedMap: new Map<string, boolean>(),
    get isCustomConfig() {
      return (
        this.config.dark !== defaultConfig.dark ||
        this.config.prefix !== defaultConfig.prefix ||
        this.config.version !== defaultConfig.version
      );
    },
    get showWarning() {
      return this.checkedMap.values().find((value) => value) === undefined;
    },
    /**
     * Checks if `<ThemeInit />` component is used in the given file content
     *
     * @param path - The path to the file being checked
     * @param content - The file content to search in
     */
    check(path: string, content: string) {
      if (this.isCustomConfig) {
        this.checkedMap.set(path, hasThemeInit(content));
      }
    },
    /**
     * Logs a warning if `<ThemeInit />` component is not used in the project and the configuration `dark`, `prefix` or `version` differs from default values.
     */
    log() {
      if (this.isCustomConfig && this.showWarning) {
        console.warn(
          `\n[!] Custom values detected in ${configFilePath}, render '<ThemeInit />' from ${config.tsx ? initFilePath : initJsxFilePath} at root level of your app to sync runtime with node config values.`,
          `\n[!] Otherwise, your app will use the default values instead of your custom configuration.`,
          `\n[!] Example: In case of custom 'prefix' or 'version', the app will not display the correct class names.`,
        );
      }
    },
  };
}

/**
 * Checks if `<ThemeInit />` component is used in the given file content
 *
 * @param content - The file content to search in
 * @returns boolean indicating if ThemeInit is used
 */
export function hasThemeInit(content: string): boolean {
  // First check for commented out ThemeInit
  if (/(\/\/|<!--|{\/\*|\/\*|\*|#)\s*<ThemeInit/.test(content)) {
    return false;
  }

  // Check for malformed tags (space after < or before /, or multiple <)
  if (/(?:< ThemeInit|<ThemeInit\/ |<<ThemeInit)/.test(content)) {
    return false;
  }

  // Check for valid ThemeInit tags with optional attributes
  // This regex matches:
  // 1. Opening < followed immediately by ThemeInit
  // 2. Optional attributes (anything that's not > or />)
  // 3. Self-closing /> or opening/closing tag pair with only whitespace between
  return /<ThemeInit(?:\s+[^>/]*)?(?:\/>\s*|>\s*<\/ThemeInit>)/.test(content);
}
