/**
 * Performs a deep equality comparison between two values.
 *
 * This function recursively compares objects and arrays, handling special cases like:
 * - RegExp objects (comparing source and flags)
 * - Objects with custom valueOf or toString methods
 * - Arrays (comparing length and each element)
 * - NaN values (which are considered equal to each other)
 *
 * @param {any} a - The first value to compare
 * @param {any} b - The second value to compare
 * @returns {boolean} True if the values are deeply equal, false otherwise
 *
 * @example
 * ```ts
 * isEqual({a: 1, b: 2}, {a: 1, b: 2}); // true
 * isEqual([1, 2, 3], [1, 2, 3]); // true
 * isEqual(/abc/g, /abc/g); // true
 * isEqual(NaN, NaN); // true
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isEqual(a: any, b: any): boolean {
  if (a === b) {
    return true;
  }

  if (a && b && typeof a === "object" && typeof b === "object") {
    if (a.constructor !== b.constructor) {
      return false;
    }

    if (Array.isArray(a)) {
      if (a.length !== b.length) {
        return false;
      }
      return a.every((item, index) => isEqual(item, b[index]));
    }

    if (a.constructor === RegExp) {
      return a.source === b.source && a.flags === b.flags;
    }

    if (a.valueOf !== Object.prototype.valueOf) {
      return a.valueOf() === b.valueOf();
    }

    if (a.toString !== Object.prototype.toString) {
      return a.toString() === b.toString();
    }
    const aKeys = Object.keys(a);

    if (aKeys.length !== Object.keys(b).length) {
      return false;
    }

    return aKeys.every((key) => Object.prototype.hasOwnProperty.call(b, key) && isEqual(a[key], b[key]));
  }

  // true if both NaN, false otherwise
  return a !== a && b !== b;
}
