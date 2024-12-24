import { deepmerge } from "deepmerge-ts";
import { getPrefix } from "../store";
import type { ResetTheme } from "../types";
import { applyPrefix } from "./apply-prefix";
import { deepMergeStrings } from "./deep-merge";
import { twMerge } from "./tailwind-merge";

const cache = new Map();

/**
 * Adds prefix to `base` and merges with custom themes, applying optional `resetTheme` modifications.
 *
 * @template T - The type of the base theme.
 * @param {[base, ...custom]} themes - An array where the first element is the base theme and the rest are custom themes.
 * @param {ResetTheme<T[]>} [resetThemeList=[]] - An optional list of `resetTheme` modifications to apply to the base theme.
 * @returns {T} - The resolved and merged theme.
 */
export function resolveTheme<T>(
  [base, ...custom]: [
    /** base theme */
    T,
    /** custom themes */
    ...unknown[],
  ],
  resetThemeList: ResetTheme<T[]> = [],
): T {
  const prefix = getPrefix();

  const cacheKey = JSON.stringify({ base, custom, resetThemeList, prefix });
  const cacheValue = cache.get(cacheKey);

  if (cacheValue) {
    return cacheValue;
  }

  const baseTheme = structuredClone(base);
  const resetTheme = resolveResetTheme(resetThemeList);

  if (resetTheme) {
    applyReset(baseTheme, resetTheme);
  }
  if (prefix) {
    stringIterator(baseTheme, (value) => applyPrefix(value, prefix));
  }

  const theme = deepMergeStrings(twMerge)(baseTheme, ...custom) as T;
  cache.set(cacheKey, theme);

  return theme;
}

/**
 * Resolves an array of `resetTheme` objects into a single `resetTheme` object.
 *
 * @template T - The type of the object.
 * @param {ResetTheme<T[]>} resetThemeList - An array of `resetTheme` objects.
 * @returns {ResetTheme<T> | undefined} - A single `resetTheme` object or undefined if the input is not a valid array or is empty.
 */
function resolveResetTheme<T>(resetThemeList: ResetTheme<T[]>): ResetTheme<T> | undefined {
  if (!Array.isArray(resetThemeList)) {
    return;
  }

  if (!resetThemeList.length) {
    return;
  }

  return deepmerge(...resetThemeList) as ResetTheme<T> | undefined;
}

/**
 * Applies `resetTheme` modifications to a base object. If ``resetTheme`` is `true`,
 * it will recursively set all string properties of the base object to an empty string.
 * If ``resetTheme`` is an object, it will recursively apply the properties of the ``resetTheme``
 * object to the base object.
 *
 * @template T - The type of the base object.
 * @param {T} base - The base object to which `resetTheme` modifications will be applied.
 * @param {ResetTheme<T>} `resetTheme` - The `resetTheme` modifications to apply. It can be a boolean or an object.
 * @returns {void}
 */
function applyReset<T>(base: T, resetTheme: ResetTheme<T>): void {
  function iterate(base: T, resetTheme?: ResetTheme<T>) {
    if (resetTheme === true) {
      if (typeof base === "object" && base !== null) {
        for (const key in base) {
          // @ts-expect-error - bypass
          base[key] = iterate(base[key], resetTheme);
        }
      }
      if (typeof base === "string") {
        return "";
      }
    }
    if (typeof resetTheme === "object" && resetTheme !== null) {
      for (const key in resetTheme) {
        // @ts-expect-error - bypass
        base[key] = iterate(base[key], resetTheme[key]);
      }
    }
    return base;
  }

  iterate(base, resetTheme);
}

/**
 * Iterates over a given input and applies a callback function to each string value found.
 * The input can be a string, an array, or an object containing strings.
 *
 * @template T - The type of the input.
 * @param {T} input - The input to iterate over. It can be a string, an array, or an object.
 * @param {(value: string) => string} callback - The callback function to apply to each string value.
 * @returns {void}
 */
function stringIterator<T>(input: T, callback: (value: string) => string): void {
  function iterate(input: T) {
    if (typeof input === "string") {
      return callback(input);
    } else if (Array.isArray(input)) {
      for (let i = 0; i < input.length; i++) {
        input[i] = iterate(input[i]);
      }
    } else if (typeof input === "object" && input !== null) {
      for (const key in input) {
        // @ts-expect-error - bypass
        input[key] = iterate(input[key]);
      }
    }
    return input;
  }

  iterate(input);
}
