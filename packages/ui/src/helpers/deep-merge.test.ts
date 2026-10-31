import { describe, expect, it } from "bun:test";
import { deepMergeStrings } from "./deep-merge";

describe("deepMergeStrings", () => {
  it("should preserve Map entries and replace values for duplicate keys", () => {
    const parentValue = { base: "parent", parentOnly: true };
    const childValue = { base: "child" };
    const parent = new Map([
      ["shared", parentValue],
      ["parent", parentValue],
    ]);
    const child = new Map([
      ["shared", childValue],
      ["child", childValue],
    ]);

    const result = deepMergeStrings((values) => values.join(" "))({ entries: parent }, { entries: child });

    expect([...result.entries.keys()]).toEqual(["shared", "parent", "child"]);
    expect(result.entries.get("shared")).toBe(childValue);
    expect(result.entries.get("parent")).toBe(parentValue);
    expect(result.entries.get("child")).toBe(childValue);
  });

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
