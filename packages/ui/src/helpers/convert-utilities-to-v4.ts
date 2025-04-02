const cache = new Map<string, string>();

/**
 * Converts Tailwind CSS v3 utility classes to v4.
 *
 * @param {string} classNames - The string of class names to convert
 * @returns {string} The converted class names string
 */
export function convertUtilitiesToV4(classNames: string): string {
  if (!classNames.trim().length) {
    return classNames;
  }

  const cacheKey = classNames;
  const cacheValue = cache.get(cacheKey);

  if (cacheValue) {
    return cacheValue;
  }

  const parts = classNames.split(/(\s+)/);
  const result = parts
    .map((part) => {
      if (/^\s+$/.test(part)) {
        return part;
      }

      const processed = part;
      const modifierMatch = processed.match(/^([^:]+:)?(.+)$/);

      if (modifierMatch) {
        const [, modifier = "", baseClass] = modifierMatch;

        for (const [regex, replacement] of regexMap) {
          if (regex.test(baseClass)) {
            return modifier + baseClass.replace(regex, replacement);
          }
        }
      }

      return processed;
    })
    .join("");

  cache.set(cacheKey, result);

  return result;
}

/**
| v3             | v4             |
| -------------- | -------------- |
| shadow-sm      | shadow-xs      |
| shadow         | shadow-sm      |
| drop-shadow-sm | drop-shadow-xs |
| drop-shadow    | drop-shadow-sm |
| blur-sm        | blur-xs        |
| blur           | blur-sm        |
| rounded-sm     | rounded-xs     |
| rounded        | rounded-sm     |
| outline-none   | outline-hidden |
| ring           | ring-3         |
 */
const regexMap = [
  [/^shadow-sm$/, "shadow-xs"],
  [/^shadow$/, "shadow-sm"],
  [/^drop-shadow-sm$/, "drop-shadow-xs"],
  [/^drop-shadow$/, "drop-shadow-sm"],
  [/^blur-sm$/, "blur-xs"],
  [/^blur$/, "blur-sm"],
  [/^rounded-sm$/, "rounded-xs"],
  [/^rounded$/, "rounded-sm"],
  // TODO: revisit this - it breaks anything focused using tab
  // [/^outline-none$/, "outline-hidden"],
  [/^ring$/, "ring-3"],
] as const;
