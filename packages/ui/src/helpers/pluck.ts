export function pluck<T>(input: T, key: T extends object ? keyof T : T) {
  // @ts-expect-error - bypass
  if (typeof input === "object" && input !== null && key in input) {
    // @ts-expect-error - bypass
    return input[key];
  }
  return input;
}
