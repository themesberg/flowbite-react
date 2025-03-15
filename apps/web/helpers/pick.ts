/**
 * Retrieves a nested property from an object using a dot-notation path
 *
 * @template T - The expected type of the returned value
 * @param {object} obj - The source object to pick from
 * @param {string} path - Dot-notation path to the desired property (e.g. "user.profile.name")
 * @returns {T | undefined} The value at the specified path, or undefined if the path doesn't exist
 */
export function pick<T extends object>(obj: object, path: string): T | undefined {
  if (!path) {
    return obj as T;
  }

  const properties = path.split(".");
  const key = properties.shift() as keyof typeof obj;

  if (!(key in obj)) {
    return;
  }

  return pick(obj[key] as T, properties.join("."));
}
