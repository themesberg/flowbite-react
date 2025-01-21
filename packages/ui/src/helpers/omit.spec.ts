import { describe, expect, it } from "vitest";
import { omit } from "./omit";

describe("omit", () => {
  it("should omit keys from object", () => {
    expect(omit(["a", "b"])({ a: "a", b: "b", c: "c" })).toEqual({ c: "c" });
  });

  it("should return empty object when all keys are omitted", () => {
    expect(omit(["a", "b", "c"])({ a: "a", b: "b", c: "c" })).toEqual({});
  });

  it("should handle objects with non-string values", () => {
    expect(omit(["b"])({ a: 1, b: true, c: { nested: "value" } })).toEqual({
      a: 1,
      c: { nested: "value" },
    });
  });

  it("should handle empty keys array", () => {
    const obj = { a: "a", b: "b" };
    expect(omit([])(obj)).toEqual(obj);
  });

  it("should handle keys that don't exist in object", () => {
    expect(omit(["x", "y"])({ a: "a", b: "b" })).toEqual({ a: "a", b: "b" });
  });
});
