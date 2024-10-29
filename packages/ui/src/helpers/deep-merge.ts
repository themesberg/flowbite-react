import { deepmergeCustom } from "deepmerge-ts";

export function deepMergeStrings(merge: (values: string[]) => string) {
  return deepmergeCustom({
    mergeOthers: (values, utils) => {
      if (values.some((value) => typeof value === "string")) {
        return merge([...new Set(values.filter((value) => typeof value === "string"))]);
      }

      return utils.defaultMergeFunctions.mergeOthers(values);
    },
  });
}
