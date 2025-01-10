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
    expect(get(testObject, "")).toBeUndefined();
  });

  it("should handle non-object input", () => {
    expect(get("string", "length")).toBe("string");
    expect(get(null, "any")).toBeUndefined();
    expect(get(undefined, "any")).toBeUndefined();
  });

  it("should handle true at root level", () => {
    const resetTheme = true;
    expect(get(resetTheme, "base")).toBe(true);
    expect(get(resetTheme, "icon")).toBe(true);
    expect(get(resetTheme, "icon.base")).toBe(true);
  });

  it("should handle partial object overrides", () => {
    const resetTheme = { icon: true };
    expect(get(resetTheme, "base")).toBeUndefined();
    expect(get(resetTheme, "icon")).toBe(true);
    expect(get(resetTheme, "icon.base")).toBe(true);
  });

  it("should handle nested partial object overrides", () => {
    const resetTheme = { icon: { base: true } };
    expect(get(resetTheme, "icon")).toEqual({ base: true });
    expect(get(resetTheme, "icon.base")).toBe(true);
    expect(get(resetTheme, "icon.size")).toBeUndefined();
  });

  it("should handle invalid paths", () => {
    const resetTheme = { icon: { base: true } };
    expect(get(resetTheme, "invalid")).toBeUndefined();
    expect(get(resetTheme, "icon.invalid")).toBeUndefined();
  });
});
