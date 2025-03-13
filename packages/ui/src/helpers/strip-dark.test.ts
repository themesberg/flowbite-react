import { describe, expect, it } from "vitest";
import { stripDark } from "./strip-dark";

describe("stripDarkClasses", () => {
  it("should return empty string when input is empty", () => {
    expect(stripDark("")).toBe("");
  });

  it("should return the same string when no dark classes are present", () => {
    const classes = "bg-white text-black p-4 rounded-md";
    expect(stripDark(classes)).toBe(classes);
  });

  it("should strip dark mode classes (v3 and v4 format)", () => {
    const input = "bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-md";
    const expected = "bg-white text-black p-4 rounded-md";
    expect(stripDark(input)).toBe(expected);
  });

  it("should handle multiple spaces between classes", () => {
    const input = "bg-white  dark:bg-gray-800   text-black    dark:text-white";
    const expected = "bg-white text-black";
    expect(stripDark(input)).toBe(expected);
  });

  it("should handle leading and trailing spaces", () => {
    const input = "  bg-white dark:bg-gray-800 text-black  ";
    const expected = "bg-white text-black";
    expect(stripDark(input)).toBe(expected);
  });

  it("should handle undefined or null input", () => {
    // @ts-expect-error Testing with undefined
    expect(stripDark(undefined)).toBe(undefined);
    // @ts-expect-error Testing with null
    expect(stripDark(null)).toBe(null);
  });
});
