import { deepmerge } from "deepmerge-ts";
import { getPrefix } from "../store";
import type { DeepPartialApplyTheme, DeepPartialBoolean } from "../types";
import { applyPrefix } from "./apply-prefix";
import { deepMergeStrings } from "./deep-merge";
import { twMerge } from "./tailwind-merge";

const cache = new Map();

/**
 * Adds prefix to `base` and merges with custom themes, applying optional `resetTheme` and `applyTheme` modifications.
 *
 * @template T - The type of the base theme.
 * @param {[base, ...custom[]]} themes - An array where the first element is the base theme and the rest are custom themes.
 * @param {DeepPartialBoolean<T[]>} resetThemeList - An array of `resetTheme` modifications to apply to the base theme.
 * @param {DeepPartialApplyTheme<T[]>} applyThemeList - An optional array of `applyTheme` modifications to apply to the merged theme.
 * @returns {T} - The resolved and merged theme.
 */
export function resolveTheme<T>(
  [base, ...custom]: [
    /** base theme */
    T,
    /** custom themes */
    ...unknown[],
  ],
  resetThemeList: DeepPartialBoolean<T[]>,
  applyThemeList: DeepPartialApplyTheme<T[]> = [],
): T {
  const prefix = getPrefix();

  const cacheKey = JSON.stringify({ base, custom, resetThemeList, applyThemeList, prefix });
  const cacheValue = cache.get(cacheKey);

  if (cacheValue) {
    return cacheValue;
  }

  const baseTheme = structuredClone(base);
  const resetTheme = resolveResetTheme(resetThemeList);
  const applyTheme = resolveApplyTheme(applyThemeList);

  if (resetTheme) {
    applyReset(baseTheme, resetTheme);
  }
  if (prefix) {
    stringIterator(baseTheme, (value) => applyPrefix(value, prefix));
  }

  const theme = deepMergeStrings(twMerge)(baseTheme, ...custom) as T;

  if (applyTheme) {
    patchApplyTheme(theme, deepmerge(baseTheme, ...custom) as T, applyTheme);
  }

  cache.set(cacheKey, theme);

  return theme;
}

/**
 * Resolves an array of `resetTheme` objects into a single `resetTheme` object.
 *
 * @template T - The type of the object.
 * @param {DeepPartialBoolean<T[]>} resetThemeList - An array of `resetTheme` objects.
 * @returns {DeepPartialBoolean<T> | undefined} - A single `resetTheme` object or undefined if the input is not a valid array or is empty.
 */
function resolveResetTheme<T>(resetThemeList: DeepPartialBoolean<T[]>): DeepPartialBoolean<T> | undefined {
  if (!Array.isArray(resetThemeList)) {
    return;
  }

  if (!resetThemeList.length) {
    return;
  }

  return deepmerge(...resetThemeList) as DeepPartialBoolean<T> | undefined;
}

/**
 * Resolves an array of `applyTheme` objects into a single `applyTheme` object.
 *
 * @param {DeepPartialApplyTheme<T[]>} applyThemeList - An array of `applyTheme` objects.
 * @returns {DeepPartialApplyTheme<T> | undefined} - A single `applyTheme` object or undefined if the input is not a valid array or is empty.
 */
function resolveApplyTheme<T>(applyThemeList: DeepPartialApplyTheme<T[]>): DeepPartialApplyTheme<T> | undefined {
  if (!Array.isArray(applyThemeList)) {
    return;
  }

  if (!applyThemeList.length) {
    return;
  }

  return deepmerge(...applyThemeList) as DeepPartialApplyTheme<T> | undefined;
}

/**
 * Applies `resetTheme` modifications to a base object. If ``resetTheme`` is `true`,
 * it will recursively set all string properties of the base object to an empty string.
 * If ``resetTheme`` is an object, it will recursively apply the properties of the ``resetTheme``
 * object to the base object.
 *
 * @template T - The type of the base object.
 * @param {T} base - The base object to which `resetTheme` modifications will be applied.
 * @param {DeepPartialBoolean<T>} `resetTheme` - The `resetTheme` modifications to apply. It can be a boolean or an object.
 * @returns {void}
 */
function applyReset<T>(base: T, resetTheme: DeepPartialBoolean<T>): void {
  function iterate(base: T, resetTheme: DeepPartialBoolean<T>) {
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
 * Patches and applies a theme by recursively merging or replacing values between base and target objects
 * based on the `applyTheme` configuration.
 *
 * @template T - The type of the theme object
 * @param {T} base - The base theme object to be modified
 * @param {T} target - The target theme object containing new values
 * @param {DeepPartialApplyTheme<T>} applyTheme - Configuration object that determines how the theme should be applied
 * @returns {void}
 */
function patchApplyTheme<T>(base: T, target: T, applyTheme: DeepPartialApplyTheme<T>): void {
  function iterate(base: T, target: T, applyTheme: DeepPartialApplyTheme<T>) {
    if (applyTheme === "replace") {
      if (typeof base === "object" && base !== null) {
        for (const key in base) {
          // @ts-expect-error - bypass
          base[key] = iterate(base[key], target[key], applyTheme);
        }
      }
      if (typeof base === "string") {
        return target;
      }
    }
    if (typeof applyTheme === "object" && applyTheme !== null) {
      for (const key in applyTheme) {
        // @ts-expect-error - bypass
        base[key] = iterate(base[key], target[key], applyTheme[key]);
      }
    }
    return base;
  }

  iterate(base, target, applyTheme);
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
