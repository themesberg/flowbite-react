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

  it("should handle arbitrary values in dark mode classes", () => {
    const input = "bg-white dark:bg-[#123456] text-black dark:text-[rgb(255,255,255)]";
    const expected = "bg-white text-black";
    expect(stripDark(input)).toBe(expected);
  });

  it("should strip dark mode classes even with prefixes", () => {
    const input = "bg-white sm:dark:bg-gray-800 md:dark:text-white hover:dark:bg-black";
    const expected = "bg-white";
    expect(stripDark(input)).toBe(expected);
  });

  it("should strip all dark mode classes regardless of prefix combinations", () => {
    const input = "bg-white dark:bg-black sm:p-4 sm:dark:p-6 md:dark:text-white lg:dark:rounded-lg";
    const expected = "bg-white sm:p-4";
    expect(stripDark(input)).toBe(expected);
  });

  it("should strip dark mode classes with arbitrary values and prefixes", () => {
    const input = "p-2 dark:p-[calc(1rem+5px)] md:dark:m-[10px] dark:bg-[#123]";
    const expected = "p-2";
    expect(stripDark(input)).toBe(expected);
  });
});
