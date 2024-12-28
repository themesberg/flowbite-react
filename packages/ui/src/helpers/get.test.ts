import { describe, expect, it } from "vitest";
import { get } from "./get";

describe("get helper", () => {
  const testObject = {
    a: {
      b: {
        c: "value",
      },
      d: [1, 2, 3],
    },
    e: "top level",
  };

  it("should get nested value with dot notation", () => {
    expect(get(testObject, "a.b.c")).toBe("value");
  });

  it("should get array value with dot notation", () => {
    expect(get(testObject, "a.d")).toEqual([1, 2, 3]);
  });

  it("should get top level value", () => {
    expect(get(testObject, "e")).toBe("top level");
  });

  it("should handle empty path", () => {
    expect(get(testObject, "")).toBe(testObject);
  });

  it("should handle non-object input", () => {
    expect(get("string", "length")).toBe("string");
    expect(get(null, "any")).toBeNull();
    expect(get(undefined, "any")).toBeUndefined();
  });
});
