const isClient: () => boolean = function () {
  return typeof window !== 'undefined';
};

export default isClient;
