import plugin from "tailwindcss/plugin";
import classListMap from "./class-list.json";
import { applyPrefix } from "./helpers/apply-prefix";

type ClassList = string[];
type Component = keyof typeof classListMap;

export type PluginOptions = Partial<{
  /**
   * Prefix to apply to base class list
   */
  prefix: string;
  /**
   * Separator to apply to base class list
   */
  separator: string;
  /**
   * Components to compile class list
   */
  components: Component[];
}>;

export default plugin.withOptions<PluginOptions>(
  // plugin
  () => () => {},
  // config
  ({ prefix, separator, components = [] } = {}) => ({
    safelist: resolvePrefix(resolveClassList(components), prefix, separator),
  }),
);

function resolvePrefix(classList: ClassList, prefix?: string, separator?: string) {
  return prefix ? classList.map((className) => applyPrefix(className, prefix, separator)) : classList;
}

function resolveClassList(components: Component[]): ClassList {
  let resolvedClassList: string[] = [];

  if (components.length) {
    const invalidNames: string[] = [];

    for (const name of components) {
      if (name in classListMap) {
        resolvedClassList.push(...classListMap[name]);
      } else {
        invalidNames.push(name);
      }
    }

    if (invalidNames.length) {
      console.error(
        `\nflowbite-react/tailwind - invalid component${invalidNames.length ? "s" : ""}:\n"${invalidNames.join(", ")}"`,
      );
      console.info(`\nAvailable components:\n${Object.keys(classListMap).join(", ")}\n`);
    }
  } else {
    resolvedClassList = [...new Set(Object.values(classListMap).flat())];
  }

  return resolvedClassList;
}
