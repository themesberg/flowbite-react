import { describe, expect, it } from "vitest";
import { isEqual } from "./is-equal";

describe("isEqual helper", () => {
  it("should return true for identical primitive values", () => {
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual("string", "string")).toBe(true);
    expect(isEqual(true, true)).toBe(true);
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, undefined)).toBe(true);
  });

  it("should return false for different primitive values", () => {
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual("string", "different")).toBe(false);
    expect(isEqual(true, false)).toBe(false);
    expect(isEqual(null, undefined)).toBe(false);
    expect(isEqual(0, null)).toBe(false);
  });

  it("should handle NaN values correctly", () => {
    expect(isEqual(NaN, NaN)).toBe(true);
    expect(isEqual(NaN, 1)).toBe(false);
    expect(isEqual(1, NaN)).toBe(false);
  });

  it("should compare arrays correctly", () => {
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    expect(isEqual([1, 2, 3], [1, 2])).toBe(false);
    expect(isEqual([], [])).toBe(true);
    expect(isEqual([1, [2, 3]], [1, [2, 3]])).toBe(true);
    expect(isEqual([1, [2, 3]], [1, [2, 4]])).toBe(false);
  });

  it("should compare objects correctly", () => {
    expect(isEqual({}, {})).toBe(true);
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(isEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true);
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
    expect(isEqual({ a: 1, b: 2 }, { a: 1 })).toBe(false);
    expect(isEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });

  it("should handle nested objects", () => {
    expect(isEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true);
    expect(isEqual({ a: { b: 1 } }, { a: { b: 2 } })).toBe(false);
    expect(isEqual({ a: { b: { c: 3 } } }, { a: { b: { c: 3 } } })).toBe(true);
    expect(isEqual({ a: { b: { c: 3 } } }, { a: { b: { c: 4 } } })).toBe(false);
  });

  it("should handle objects with array values", () => {
    expect(isEqual({ a: [1, 2, 3] }, { a: [1, 2, 3] })).toBe(true);
    expect(isEqual({ a: [1, 2, 3] }, { a: [1, 2, 4] })).toBe(false);
    expect(isEqual({ a: [1, { b: 2 }] }, { a: [1, { b: 2 }] })).toBe(true);
    expect(isEqual({ a: [1, { b: 2 }] }, { a: [1, { b: 3 }] })).toBe(false);
  });

  it("should handle arrays with object elements", () => {
    expect(isEqual([{ a: 1 }, { b: 2 }], [{ a: 1 }, { b: 2 }])).toBe(true);
    expect(isEqual([{ a: 1 }, { b: 2 }], [{ a: 1 }, { b: 3 }])).toBe(false);
  });

  it("should handle RegExp objects", () => {
    expect(isEqual(/abc/g, /abc/g)).toBe(true);
    expect(isEqual(/abc/g, /abc/i)).toBe(false);
    expect(isEqual(/abc/g, /def/g)).toBe(false);
  });

  it("should handle objects with custom valueOf method", () => {
    const date1 = new Date("2023-01-01");
    const date2 = new Date("2023-01-01");
    const date3 = new Date("2023-01-02");

    expect(isEqual(date1, date2)).toBe(true);
    expect(isEqual(date1, date3)).toBe(false);
  });

  it("should handle objects with custom toString method", () => {
    const obj1 = {
      toString() {
        return "custom string";
      },
    };

    const obj2 = {
      toString() {
        return "custom string";
      },
    };

    const obj3 = {
      toString() {
        return "different string";
      },
    };

    expect(isEqual(obj1, obj2)).toBe(true);
    expect(isEqual(obj1, obj3)).toBe(false);
  });

  it("should handle objects with different constructors", () => {
    class A {}
    class B {}

    expect(isEqual(new A(), new A())).toBe(true);
    expect(isEqual(new A(), new B())).toBe(false);
  });
});
