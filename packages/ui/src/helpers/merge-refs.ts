export function mergeRefs<T>(
  refs: Array<React.MutableRefObject<T> | React.LegacyRef<T> | undefined | null>,
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        const _ref = ref as React.MutableRefObject<T | null>;
        _ref.current = value;
      }
    });
  };
}
