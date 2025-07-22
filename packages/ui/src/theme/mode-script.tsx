import type React from "react";
import type { ThemeMode } from "../hooks/use-theme-mode";

const defaultOptions = {
  mode: "auto" as ThemeMode,
  defaultMode: "auto" as ThemeMode,
  localStorageKey: "flowbite-theme-mode",
  prefix: "",
  version: 4 as 3 | 4,
};

export interface ThemeModeScriptProps extends React.ComponentPropsWithoutRef<"script"> {
  /**
   * The current theme mode to use
   *
   * @type {"light" | "dark" | "auto"}
   */
  mode?: ThemeMode;
  /**
   * The default theme mode if none is set
   *
   * @type {"light" | "dark" | "auto"}
   * @default "auto"
   */
  defaultMode?: ThemeMode;
  /**
   * Key used to store theme mode in localStorage
   *
   * @type {string}
   * @default "flowbite-theme-mode"
   */
  localStorageKey?: string;
  /**
   * The prefix to use for the theme mode class
   *
   * @type {string}
   * @default ""
   */
  prefix?: string;
  /**
   * The version of Tailwind CSS to use
   *
   * @type {3 | 4}
   * @default 4
   */
  version?: 3 | 4;
}

/**
 * A script component that handles theme mode initialization
 *
 * @param {Object} props - The component props
 * @param {ThemeMode} [props.mode] - The current theme mode to use
 * @param {ThemeMode} [props.defaultMode="auto"] - The default theme mode if none is set
 * @param {string} [props.localStorageKey="flowbite-theme-mode"] - Key used to store theme mode in localStorage
 * @param {React.ComponentPropsWithoutRef<"script">} props.others - Additional script element props
 * @returns {JSX.Element} Script element that initializes theme mode
 */
export function ThemeModeScript({
  mode,
  defaultMode = defaultOptions.defaultMode,
  localStorageKey = defaultOptions.localStorageKey,
  prefix = defaultOptions.prefix,
  version = defaultOptions.version,
  ...others
}: ThemeModeScriptProps): JSX.Element {
  return (
    <script
      {...others}
      data-flowbite-theme-mode-script
      dangerouslySetInnerHTML={{
        __html: getThemeModeScript({
          mode,
          defaultMode,
          localStorageKey,
          prefix,
          version,
        }),
      }}
    />
  );
}

ThemeModeScript.displayName = "ThemeModeScript";

/**
 * Generates a script string that handles theme mode initialization
 *
 * @param {Object} options - The options object
 * @param {ThemeMode} [options.mode] - The current theme mode to use
 * @param {ThemeMode} [options.defaultMode="auto"] - The default theme mode if none is set
 * @param {string} [options.localStorageKey="flowbite-theme-mode"] - Key used to store theme mode in localStorage
 * @param {string} [options.prefix=""] - The prefix to use for the theme mode class
 * @returns {string} Script string that initializes theme mode
 */
export function getThemeModeScript(
  props: {
    mode?: ThemeMode;
    defaultMode?: ThemeMode;
    localStorageKey?: string;
    prefix?: string;
    version?: 3 | 4;
  } = {},
): string {
  const {
    mode,
    defaultMode = defaultOptions.defaultMode,
    localStorageKey = defaultOptions.localStorageKey,
    prefix = defaultOptions.prefix,
    version = defaultOptions.version,
  } = props;

  return `
    try {
      const storageMode = window.localStorage.getItem("${localStorageKey}");
      const isStorageModeValid = storageMode === "light" || storageMode === "dark" || storageMode === "auto";
      const resolvedMode = (isStorageModeValid ? storageMode : null) ?? ${mode ? `"${mode}"` : undefined} ?? "${defaultMode}";
      const computedMode =
        resolvedMode === "auto" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : resolvedMode;
      const className = ${version === 3 ? `"${prefix}dark"` : "dark"};

      if (computedMode === "dark") {
        document.documentElement.classList.add(className);
      } else {
        document.documentElement.classList.remove(className);
      }
      localStorage.setItem("${localStorageKey}", resolvedMode);

      // Add listener for system theme changes
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", (e) => {
        const storageMode = window.localStorage.getItem("${localStorageKey}");
        const isStorageModeValid = storageMode === "light" || storageMode === "dark" || storageMode === "auto";
        const resolvedMode = isStorageModeValid ? storageMode : "${defaultMode}";

        if (resolvedMode === "auto") {
          if (e.matches) {
            document.documentElement.classList.add(className);
          } else {
            document.documentElement.classList.remove(className);
          }
        }
      });

      // Add listener for storage changes
      window.addEventListener("storage", (e) => {
        if (e.key === "${localStorageKey}") {
          const newMode = e.newValue;
          const isStorageModeValid = newMode === "light" || newMode === "dark" || newMode === "auto";
          const resolvedMode = isStorageModeValid ? newMode : "${defaultMode}";

          if (resolvedMode === "dark" || (resolvedMode === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add(className);
          } else {
            document.documentElement.classList.remove(className);
          }
        }
      });
    } catch (e) {}
  `;
}

/**
 * Initializes the theme mode by checking localStorage, provided mode, or default mode
 * and applies the appropriate class to the document element
 *
 * @param {Object} options - The options object
 * @param {ThemeMode} [options.mode] - The current theme mode to use
 * @param {ThemeMode} [options.defaultMode="auto"] - The default theme mode if none is set
 * @param {string} [options.localStorageKey="flowbite-theme-mode"] - Key used to store theme mode in localStorage
 * @param {string} [options.prefix=""] - The prefix to use for the theme mode class
 * @param {3 | 4} [options.version=4] - The version of Tailwind CSS to use
 * @returns {void}
 */
export function initThemeMode(
  props: {
    mode?: ThemeMode;
    defaultMode?: ThemeMode;
    localStorageKey?: string;
    prefix?: string;
    version?: 3 | 4;
  } = {},
): void {
  const {
    mode,
    defaultMode = defaultOptions.defaultMode,
    localStorageKey = defaultOptions.localStorageKey,
    prefix = defaultOptions.prefix,
    version = defaultOptions.version,
  } = props;

  try {
    const storageMode = window.localStorage.getItem(localStorageKey);
    const isStorageModeValid = storageMode === "light" || storageMode === "dark" || storageMode === "auto";
    const resolvedMode = (isStorageModeValid ? storageMode : null) ?? mode ?? defaultMode;
    const computedMode =
      resolvedMode === "auto"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : resolvedMode;
    const className = version === 3 ? `${prefix}dark` : "dark";

    if (computedMode === "dark") {
      document.documentElement.classList.add(className);
    } else {
      document.documentElement.classList.remove(className);
    }
    localStorage.setItem(localStorageKey, resolvedMode);

    // Add listener for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) => {
      const storageMode = window.localStorage.getItem(localStorageKey);
      const isStorageModeValid = storageMode === "light" || storageMode === "dark" || storageMode === "auto";
      const resolvedMode = isStorageModeValid ? storageMode : defaultMode;

      if (resolvedMode === "auto") {
        if (e.matches) {
          document.documentElement.classList.add(className);
        } else {
          document.documentElement.classList.remove(className);
        }
      }
    });

    // Add listener for storage changes
    window.addEventListener("storage", (e) => {
      if (e.key === localStorageKey) {
        const newMode = e.newValue;
        const isStorageModeValid = newMode === "light" || newMode === "dark" || newMode === "auto";
        const resolvedMode = isStorageModeValid ? newMode : defaultMode;

        if (
          resolvedMode === "dark" ||
          (resolvedMode === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
          document.documentElement.classList.add(className);
        } else {
          document.documentElement.classList.remove(className);
        }
      }
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-empty
  } catch (e) {}
}
