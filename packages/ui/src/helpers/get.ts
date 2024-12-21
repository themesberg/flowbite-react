export function get<T>(input: T, path: string) {
  const keys = path.split(".");

  let result = input;
  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      // @ts-expect-error - bypass
      result = result[key];
    } else {
      return result;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return result as any;
}
