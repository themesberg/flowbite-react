export function range(start: number, end: number) {
  if (start >= end) {
    return [];
  }

  return [...Array(end - start + 1).keys()].map((key: number): number => key + start);
}
