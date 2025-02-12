import { extendTailwindMerge, type ClassNameValue } from "tailwind-merge";
import { extendTailwindMerge as extendTailwindMerge_v2 } from "tailwind-merge-v2";
import { getPrefix } from "../store";
import { getTailwindVersion } from "./get-tailwind-version";

const cache = new Map<string | undefined, ReturnType<typeof extendTailwindMerge>>();

export function twMerge(...classLists: ClassNameValue[]): string {
  const prefix = getPrefix();
  const version = getTailwindVersion();

  const cacheKey = `${prefix}.${version}`;
  const cacheValue = cache.get(cacheKey);

  if (cacheValue) {
    return cacheValue(...classLists);
  }

  const twMergeFn = (version === 3 ? extendTailwindMerge_v2 : extendTailwindMerge)({
    extend: {
      classGroups: {
        "bg-image": ["bg-arrow-down-icon", "bg-check-icon", "bg-dash-icon", "bg-dot-icon"],
        shadow: ["shadow-sm-light"],
      },
    },
    prefix,
  });
  cache.set(cacheKey, twMergeFn);

  return twMergeFn(...classLists);
}
