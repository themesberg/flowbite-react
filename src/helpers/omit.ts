export const omit =
  <T extends object, K extends string>(keys: readonly K[]) =>
  (obj: T): Omit<T, K> => {
    const result = {} as Omit<T, K>;
    Object.keys(obj).forEach((key) => {
      //@ts-expect-error - Somehow TS does not like this.
      if (keys.includes(key)) {
        return;
      }
      //@ts-expect-error - Somehow TS does not like this.
      result[key] = obj[key];
    });
    return result;
  };
