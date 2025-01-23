import { describe, expect, it } from "vitest";
import { applyPrefix } from "./apply-prefix";

describe("applyPrefix", () => {
  it("should return empty string when classNames is empty", () => {
    expect(applyPrefix("", "tw-")).toBe("");
  });

  it("should return original classNames when prefix is empty", () => {
    expect(applyPrefix("text-lg", "")).toBe("text-lg");
  });

  it("should add prefix to single class", () => {
    expect(applyPrefix("text-lg", "tw-")).toBe("tw-text-lg");
  });

  it("should add prefix to multiple classes", () => {
    expect(applyPrefix("text-lg font-bold", "tw-")).toBe("tw-text-lg tw-font-bold");
  });

  it("should handle classes with modifiers", () => {
    expect(applyPrefix("dark:text-xl hover:text-lg", "tw-")).toBe("dark:tw-text-xl hover:tw-text-lg");
  });

  it("should preserve ! modifier", () => {
    expect(applyPrefix("!text-lg", "tw-")).toBe("!tw-text-lg");
  });

  it("should preserve - modifier", () => {
    expect(applyPrefix("-mt-2", "tw-")).toBe("-tw-mt-2");
  });

  it("should preserve ! and - modifiers", () => {
    expect(applyPrefix("!-mt-2", "tw-")).toBe("!-tw-mt-2");
  });

  it("should handle arbitrary values", () => {
    expect(applyPrefix("[&>*]:gap-4", "tw-")).toBe("[&>*]:tw-gap-4");
  });

  it("should handle custom separator", () => {
    expect(applyPrefix("dark__text-xl", "tw-", "__")).toBe("dark__tw-text-xl");
  });

  it("should not add prefix if class already has it", () => {
    expect(applyPrefix("tw-text-lg", "tw-")).toBe("tw-text-lg");
  });

  it("should handle extra whitespace", () => {
    expect(applyPrefix("  text-lg   font-bold  ", "tw-")).toBe("tw-text-lg tw-font-bold");
  });

  it("should handle extra whitespace in prefix", () => {
    expect(applyPrefix("text-lg", "  tw-  ")).toBe("tw-text-lg");
  });

  it("should handle multiple modifiers", () => {
    expect(applyPrefix("dark:hover:!text-lg", "tw-")).toBe("dark:hover:!tw-text-lg");
  });
});
