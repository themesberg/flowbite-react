import { getStore } from "../store";
import type { Unstyled } from "../types";
import { applyPrefix } from "./apply-prefix";
import { deepMergeStrings } from "./deep-merge";
import { twMerge } from "./tailwind-merge";

const cache = new Map();

/**
 * Adds prefix to `base` and merges the result with `...custom`
 *
 * @param base base theme
 * @param custom custom themes
 * @returns merged `[base, ...custom]`
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

function resolveUnstyled<T>(unstyledList: Unstyled<T[]>): Unstyled<T> | undefined {
  if (!Array.isArray(unstyledList)) {
    return;
  }

  if (!unstyledList.length) {
    return;
  }

  // TODO: smart merge

  return unstyledList[0];
}

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
