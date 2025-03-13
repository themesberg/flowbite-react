const cache = new Map<string, string>();

/**
 * Removes all dark mode classes from a string of class names.
 *
 * This function filters out any class that starts with "dark:" prefix
 * from the provided string of space-separated class names.
 * Results are cached for performance.
 *
 * @param {string} classNames - A string containing one or more CSS class names separated by spaces
 * @returns {string} A new string with all dark mode classes removed
 *
 * @example
 * ```ts
 * stripDark("text-black dark:text-white bg-white dark:bg-black"); // "text-black bg-white"
 * ```
 */
export function stripDark(classNames: string): string {
  if (classNames === undefined || classNames === null) {
    return classNames;
  }

  if (!classNames.trim().length) {
    return classNames;
  }

  classNames = classNames.trim();

  const cacheKey = classNames;
  const cacheValue = cache.get(cacheKey);

  if (cacheValue) {
    return cacheValue;
  }

  const result = classNames
    .split(/\s+/)
    .filter((className) => !className.includes("dark:"))
    .join(" ");

  cache.set(cacheKey, result);

  return result;
}
