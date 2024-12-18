import { applyPrefix } from "../helpers/apply-prefix";
import { CLASS_LIST_MAP } from "./class-list";
import type { ClassList, ComponentName } from "./types";

export function resolvePrefix(classList: ClassList, prefix?: string, separator?: string) {
  prefix = prefix?.trim();

  return prefix ? classList.map((className) => applyPrefix(className, prefix, separator)) : classList;
}

export function resolveClassList(components?: ComponentName[]): ClassList {
  let resolvedClassList: string[] = [];

  if (components?.length) {
    const invalidNames: string[] = [];

    for (const name of components) {
      if (name in CLASS_LIST_MAP) {
        resolvedClassList.push(...CLASS_LIST_MAP[name]);
      } else {
        invalidNames.push(name);
      }
    }

    if (invalidNames.length) {
      console.error(
        `\nflowbite-react/tailwind - invalid component${invalidNames.length ? "s" : ""}:\n"${invalidNames.join(", ")}"`,
      );
      console.info(`\nAvailable components:\n${Object.keys(CLASS_LIST_MAP).join(", ")}\n`);
    }
  } else {
    resolvedClassList = Object.values(CLASS_LIST_MAP).flat();
  }

  return [...new Set(resolvedClassList)];
}
