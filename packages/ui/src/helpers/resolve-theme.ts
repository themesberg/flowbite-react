import { deepmerge } from "deepmerge-ts";
import { getStore } from "../store";
import type { Unstyled } from "../types";
import { applyPrefix } from "./apply-prefix";
import { deepMergeStrings } from "./deep-merge";
import { twMerge } from "./tailwind-merge";

const cache = new Map();

/**
 * Adds prefix to `base` and merges with custom themes, applying optional unstyled modifications.
 *
 * @template T - The type of the base theme.
 * @param {[base, ...custom]} themes - An array where the first element is the base theme and the rest are custom themes.
 * @param {Unstyled<T[]>} [unstyledList=[]] - An optional list of unstyled modifications to apply to the base theme.
 * @returns {T} - The resolved and merged theme.
 */
export function resolveTheme<T>(
  [base, ...custom]: [
    /** base theme */
    T,
    /** custom themes */
    ...unknown[],
  ],
  unstyledList: Unstyled<T[]> = [],
): T {
  const { prefix } = getStore();

  const cacheKey = JSON.stringify({ base, custom, unstyledList, prefix });
  const cacheValue = cache.get(cacheKey);

  if (cacheValue) {
    return cacheValue;
  }

  const baseTheme = structuredClone(base);
  const unstyled = resolveUnstyled(unstyledList);

  if (unstyled) {
    applyUnstyled(baseTheme, unstyled);
  }
  if (prefix) {
    stringIterator(baseTheme, (value) => applyPrefix(value, prefix));
  }

  const theme = deepMergeStrings(twMerge)(baseTheme, ...custom) as T;
  cache.set(cacheKey, theme);

  return theme;
}

/**
 * Resolves an array of unstyled theme objects into a single unstyled theme object.
 *
 * @template T - The type of the theme object.
 * @param {Unstyled<T[]>} unstyledList - An array of unstyled theme objects.
 * @returns {Unstyled<T> | undefined} - A single unstyled theme object or undefined if the input is not a valid array or is empty.
 */
function resolveUnstyled<T>(unstyledList: Unstyled<T[]>): Unstyled<T> | undefined {
  if (!Array.isArray(unstyledList)) {
    return;
  }

  if (!unstyledList.length) {
    return;
  }

  return deepmerge(...unstyledList) as Unstyled<T> | undefined;
}

/**
 * Applies unstyled modifications to a base object. If `unstyled` is `true`,
 * it will recursively set all string properties of the base object to an empty string.
 * If `unstyled` is an object, it will recursively apply the properties of the `unstyled`
 * object to the base object.
 *
 * @template T - The type of the base object.
 * @param {T} base - The base object to which unstyled modifications will be applied.
 * @param {Unstyled<T>} unstyled - The unstyled modifications to apply. It can be a boolean or an object.
 * @returns {void}
 */
function applyUnstyled<T>(base: T, unstyled: Unstyled<T>): void {
  function iterate(base: T, unstyled?: Unstyled<T>) {
    if (unstyled === true) {
      if (typeof base === "object" && base !== null) {
        for (const key in base) {
          // @ts-expect-error - bypass
          base[key] = iterate(base[key], unstyled);
        }
      }
      if (typeof base === "string") {
        return "";
      }
    }
    if (typeof unstyled === "object" && unstyled !== null) {
      for (const key in unstyled) {
        // @ts-expect-error - bypass
        base[key] = iterate(base[key], unstyled[key]);
      }
    }
    return base;
  }

  iterate(base, unstyled);
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
