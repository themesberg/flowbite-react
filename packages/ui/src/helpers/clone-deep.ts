import { isObject } from './is-object';

export function cloneDeep<T>(source: T): T {
  if (!isObject(source)) {
    return source;
  }

  const output: Record<string, unknown> = {};

  for (const key in source) {
    output[key] = cloneDeep(source[key]);
  }

  return output as T;
}
