import { deepmergeInto } from "deepmerge-ts";
import { getStore } from "../store";
import { applyPrefix } from "./apply-prefix";

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

  const theme = structuredClone(base);

  if (prefix && shouldPrefix) {
    stringIterator(theme, (value) => (value ? applyPrefix(value, prefix) : value));
  }

  // TODO: implement `twMerge()`
  deepmergeInto(theme as object, ...custom);
  cache.set(cacheKey, theme);

  return theme as T;
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
