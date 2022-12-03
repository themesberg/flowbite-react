// source: https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge

import { DeepPartial } from '../components';

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: unknown) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Deep merge two objects with deep copy of the target object.
 * @param target
 * @param ...sources
 */
export function mergeDeep<T extends Record<string, unknown>>(target: T, ...sources: DeepPartial<T>[]): T {
  if (!sources.length) return target;
  const source = sources.shift();
  const output = { ...target };

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(output, { [key]: {} });
        (output[key] as Record<string, unknown>) = mergeDeep(
          target[key] as Record<string, unknown>,
          source[key] as Record<string, unknown>,
        );
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(output, ...sources);
}
