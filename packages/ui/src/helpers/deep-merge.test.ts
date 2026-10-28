import { describe, expect, it } from "bun:test";
import { deepMergeStrings } from "./deep-merge";

describe("deepMergeStrings", () => {
  it("should merge circular records without exhausting the stack", () => {
    interface RecursiveRecord {
      base: string;
      self?: RecursiveRecord;
    }

    const parent: RecursiveRecord = { base: "shared parent" };
    parent.self = parent;
    const child: RecursiveRecord = { base: "shared child" };
    child.self = child;

    const result = deepMergeStrings((values) => values.join(" "))(parent, child);

    expect(result.base).toBe("shared parent child");
    expect(result.self).toBe(result);
  });
});
