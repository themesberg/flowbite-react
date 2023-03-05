export const isClient: () => boolean = function () {
  return typeof window !== 'undefined';
};
