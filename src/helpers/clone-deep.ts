import { isObject } from './is-object';

export function cloneDeep<T>(source: T) {
  if (!isObject(source)) {
    return source;
  }

  const output = { ...source };

  Object.keys(source).forEach((key) => {
    (output as Record<string, unknown>)[key] = cloneDeep(source[key]);
  });

  return output;
}
