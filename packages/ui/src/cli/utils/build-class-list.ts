import { applyPrefix } from "../../helpers/apply-prefix";
import { applyPrefixV3 } from "../../helpers/apply-prefix-v3";
import { convertUtilitiesToV4 } from "../../helpers/convert-utilities-to-v4";
import { getTailwindVersion } from "../../helpers/get-tailwind-version";
import { CLASS_LIST_MAP, COMPONENT_TO_CLASS_LIST_MAP } from "../../metadata/class-list";
import { DEPENDENCY_LIST_MAP } from "../../metadata/dependency-list";

/**
 * Builds a list of CSS classes based on the provided components and prefix.
 *
 * @param {Object} options - The options for building the class list.
 * @param {string[]} options.components - The components to include in the class list.
 * @param {string} options.prefix - The prefix to apply to the class names.
 * @returns {string[]} The sorted list of CSS classes.
 */
export function buildClassList({ components, prefix }: { components: string[]; prefix: string }): string[] {
  const version = getTailwindVersion();

  let classList: string[] = [];

  if (components.includes("*")) {
    classList = [...new Set(Object.values(CLASS_LIST_MAP).flat())];
  } else {
    const resolvedComponents = new Set<string>();
    const visited = new Set<string>();

    // eslint-disable-next-line no-inner-declarations
    function resolveDependencies(name: string) {
      if (visited.has(name)) {
        return;
      }
      visited.add(name);

      if (name in DEPENDENCY_LIST_MAP) {
        resolvedComponents.add(name);

        for (const dependency of DEPENDENCY_LIST_MAP[name as keyof typeof DEPENDENCY_LIST_MAP]) {
          if (dependency in DEPENDENCY_LIST_MAP) {
            resolvedComponents.add(dependency);
            resolveDependencies(dependency);
          }
        }
      }
    }

    for (const name of components) {
      resolveDependencies(name);
    }

    classList = [
      ...new Set(
        [...resolvedComponents].flatMap((name) => {
          const classListKey = COMPONENT_TO_CLASS_LIST_MAP[name as keyof typeof COMPONENT_TO_CLASS_LIST_MAP];
          const resolvedClassList = CLASS_LIST_MAP[classListKey as keyof typeof CLASS_LIST_MAP];

          return resolvedClassList || [];
        }),
      ),
    ];
  }

  if (version === 4) {
    classList = classList.map(convertUtilitiesToV4);
  }
  if (prefix?.trim()) {
    classList = classList.map((className) =>
      version === 3 ? applyPrefixV3(className, prefix) : applyPrefix(className, prefix),
    );
  }

  return classList.sort();
}
