export const isClient: () => boolean = () => {
  return typeof window !== 'undefined';
};
