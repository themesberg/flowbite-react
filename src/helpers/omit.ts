export const omit =
  <T extends object, K extends string>(keys: readonly K[]) =>
  (obj: T): Omit<T, K> => {
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
