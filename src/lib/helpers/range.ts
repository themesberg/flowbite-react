export default (start: number, end: number): number[] => {
  if (start >= end) {
    return [];
  }

  return [...Array(end - start + 1).keys()].map((key: number): number => key + start);
};
