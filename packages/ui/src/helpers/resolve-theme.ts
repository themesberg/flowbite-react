import { getStore } from "../store";
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
  options: Partial<{
    shouldPrefix: boolean;
  }> = {},
): T {
  const { prefix } = getStore();
  const { shouldPrefix = true } = options ?? {};

  const cacheKey = JSON.stringify({ base, custom, options, prefix });
  const cacheValue = cache.get(cacheKey);

  if (cacheValue) {
    return cacheValue;
  }

  const baseTheme = structuredClone(base);

  if (prefix && shouldPrefix) {
    stringIterator(baseTheme, (value) => (value ? applyPrefix(value, prefix) : value));
  }

  const theme = deepMergeStrings(twMerge)(baseTheme, ...custom) as T;
  cache.set(cacheKey, theme);

  return theme;
}

function stringIterator<T>(input: T, callback: (value: string) => string): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function iterate(value: any) {
    if (typeof value === "string") {
      return callback(value) as T;
    } else if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        value[i] = iterate(value[i]);
      }
    } else if (typeof value === "object" && value !== null) {
      for (const key in value) {
        value[key] = iterate(value[key]);
      }
    }
    return value;
  }

  iterate(input);
}
