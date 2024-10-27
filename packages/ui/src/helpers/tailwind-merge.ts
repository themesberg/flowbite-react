import { ClassNameValue, extendTailwindMerge } from "tailwind-merge";
import { getStore } from "../store";

const cache = new Map<string | undefined, ReturnType<typeof extendTailwindMerge>>();

export function twMerge(...classLists: ClassNameValue[]) {
  const { prefix } = getStore();

  const cacheKey = prefix;
  const cacheValue = cache.get(cacheKey);

  if (cacheValue) {
    return cacheValue(...classLists);
  }

  const twMergeFn = extendTailwindMerge({ prefix });
  cache.set(cacheKey, twMergeFn);

  return twMergeFn(...classLists);
}
