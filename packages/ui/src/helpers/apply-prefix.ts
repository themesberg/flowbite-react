/**
 * Applies a prefix to class names while preserving modifiers and arbitrary values.
 *
 * @param classNames - A string containing one or more CSS class names separated by spaces
 * @param prefix - The prefix to be added to each class name
 * @param separator - The separator used between class name parts (default ":")
 * @returns A new string with the prefix applied to each class name
 */
export function applyPrefix(classNames: string, prefix: string, separator = ":"): string {
  classNames = classNames.trim();
  prefix = prefix.trim();
  separator = separator.trim();

  if (!classNames.length || !prefix.length) {
    return classNames;
  }

  return classNames
    .split(/\s+/)
    .map((className) => {
      className = className.trim();

      if (!className.length) {
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
