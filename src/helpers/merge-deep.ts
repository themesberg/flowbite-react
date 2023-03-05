/**
 * Check if provided parameter is plain object
 * @param item
 * @returns boolean
 */
function isObject(item: unknown): item is Record<string, unknown> {
  return item !== null && typeof item === 'object' && item.constructor === Object;
}

function cloneDeep<T>(source: T) {
  if (!isObject(source)) {
    return source;
  }

  const output = { ...source };

  Object.keys(source).forEach((key) => {
    (output as Record<string, unknown>)[key] = cloneDeep(source[key]);
  });

  return output;
}

/**
 * Merge and deep copy the values of all of the enumerable own properties of target object from source object to a new object
 * @param target The target object to get properties from.
 * @param source The source object from which to copy properties.
 * @return A new merged and deep copied object.
 */
export function mergeDeep<T extends object, S extends object>(target: T, source: S): T & S {
  if (isObject(source) && Object.keys(source).length === 0) {
    return cloneDeep({ ...target, ...source });
  }

  const output = { ...target, ...source };

  if (isObject(source) && isObject(target)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key]) && key in target && isObject(target[key])) {
        (output as Record<string, unknown>)[key] = mergeDeep(target[key] as object, source[key] as object);
      } else {
        (output as Record<string, unknown>)[key] = isObject(source[key]) ? cloneDeep(source[key]) : source[key];
      }
    });
  }

  return output;
}
