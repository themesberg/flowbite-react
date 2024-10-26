export function applyPrefix(classNames: string, prefix: string, separator = ":"): string {
  return classNames
    .split(/\s+/)
    .map((className) => {
      if (!className.trim()) {
        return className;
      }

      if (className.startsWith("[") && className.endsWith("]")) {
        return className;
      }

      const parts = className.split(separator);
      const baseClass = parts.pop() ?? "";

      let prefixedBaseClass = baseClass;

      const modifiers = ["!", "-"].reduce<string[]>((acc, modifier) => {
        if (prefixedBaseClass.startsWith(modifier)) {
          acc.push(modifier);
          prefixedBaseClass = prefixedBaseClass.replace(modifier, "");
        }
        return acc;
      }, []);

      if (prefixedBaseClass.startsWith(prefix)) {
        return className;
      }

      prefixedBaseClass = modifiers.join("") + prefix + prefixedBaseClass;

      return `${parts.join(separator)}${parts.length > 0 ? separator : ""}${prefixedBaseClass}`;
    })
    .join(" ");
}
