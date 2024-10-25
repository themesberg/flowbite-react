import { deepmerge, deepmergeInto } from "deepmerge-ts";
import { getStore } from "../store";
import { applyPrefix } from "./apply-prefix";

const cache = new Map();

/**
 * Merges [`base`, `store`, `custom`] and applies prefix to [`base`, `store`]
 *
 * @param base base theme
 * @param store store theme
 * @param custom custom theme
 * @returns merged `[base, store, custom]`
 */
export function resolveTheme<T>(
  [base, store, custom]: [
    /** base theme */
    T,
    /** store theme */
    unknown,
    /** custom theme */
    unknown?,
  ],
  options: Partial<{
    shouldPrefix: boolean;
  }> = {},
): T {
  const { prefix } = getStore();
  const { shouldPrefix = true } = options ?? {};

  const cacheKey = JSON.stringify({ base, store, custom, options, prefix });
  const cacheValue = cache.get(cacheKey);

  if (cacheValue) {
    return cacheValue;
  }

  // TODO: implement `twMerge()`
  const theme = structuredClone(deepmerge(base, store));

  if (prefix && shouldPrefix) {
    stringIterator(theme, (value) => (value ? applyPrefix(value, prefix) : value));
  }

  deepmergeInto(theme as object, custom);
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
