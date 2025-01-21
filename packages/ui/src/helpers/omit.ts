/**
 * Creates a function that returns a new object with specified keys omitted from the input object.
 *
 * @template T - The type of the input object
 * @template K - The type of keys to omit (must be string)
 * @param {readonly K[]} keys - An array of keys to omit from the object
 * @returns {(obj: T) => Omit<T, K>} A function that takes an object and returns a new object without the specified keys
 *
 * @example
 * ```typescript
 * const removeKeys = omit(['password', 'token']);
 * const user = { name: 'John', email: 'john@example.com', password: '123' };
 * const safeUser = removeKeys(user); // { name: 'John', email: 'john@example.com' }
 * ```
 */
export function omit<T extends object, K extends string>(keys: readonly K[]): (obj: T) => Omit<T, K> {
  return (obj: T): Omit<T, K> => {
    const result = {} as Omit<T, K>;

    for (const key in obj) {
      // @ts-expect-error - bypass
      if (keys.includes(key)) {
        continue;
      }
      // @ts-expect-error - bypass
      result[key] = obj[key];
    }

    return result;
  };
}
