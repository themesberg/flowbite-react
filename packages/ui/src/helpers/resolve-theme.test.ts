import { beforeEach, describe, expect, it } from "vitest";
import { setStore } from "../store";
import { resolveTheme } from "./resolve-theme";

describe("resolveTheme", () => {
  beforeEach(() => {
    setStore({ prefix: "" });
  });

  it("should merge base theme with custom themes", () => {
    const base = { color: "text-red-400" };
    const custom = { background: "text-blue-400" };

    expect(resolveTheme([base, custom], [])).toEqual({
      color: "text-red-400",
      background: "text-blue-400",
    });
  });

  it("should apply prefix with version 3 format", () => {
    setStore({ prefix: "tw-", version: 3 });

    const base = { color: "text-red-400" };

    expect(resolveTheme([base], [])).toEqual({
      color: "tw-text-red-400",
    });
  });

  it("should clear theme values when clearTheme is true", () => {
    const base = { color: "text-red-400", nested: { background: "text-blue-400" } };
    const clearTheme = [{ color: true, nested: { background: true } }];

    expect(resolveTheme([base], clearTheme)).toEqual({
      color: "",
      nested: { background: "" },
    });
  });

  it("should apply theme modifications", () => {
    const base = { color: "flex text-red-100" };
    const custom = { color: "grid" };
    const applyTheme = [{ color: "replace" }];

    // @ts-expect-error - complex inference
    expect(resolveTheme([base, custom], [], applyTheme)).toEqual({
      color: "grid",
    });
  });

  it("should handle deep nested objects", () => {
    const base = {
      colors: {
        primary: { light: "text-blue-100", dark: "text-blue-800" },
        secondary: { light: "text-red-400", dark: "text-red-800" },
      },
    };
    const custom = {
      colors: {
        primary: { light: "text-cyan-100" },
      },
    };

    expect(resolveTheme([base, custom], [])).toEqual({
      colors: {
        primary: { light: "text-cyan-100", dark: "text-blue-800" },
        secondary: { light: "text-red-400", dark: "text-red-800" },
      },
    });
  });

  it("should handle multiple custom themes in order", () => {
    const base = { color: "text-red-400" };
    const custom1 = { color: "text-blue-400" };
    const custom2 = { color: "text-green-400" };
    const custom3 = { color: "text-yellow-400" };

    expect(resolveTheme([base, custom1, custom2, custom3], [])).toEqual({
      color: "text-yellow-400",
    });
  });

  it("should handle complex clearTheme with nested structures", () => {
    const base = {
      button: {
        base: "px-4 py-2",
        variants: {
          primary: "bg-blue-500",
          secondary: "bg-gray-500",
        },
      },
    };
    const clearTheme = [
      {
        button: {
          variants: {
            primary: true,
          },
        },
      },
    ];

    expect(resolveTheme([base], clearTheme)).toEqual({
      button: {
        base: "px-4 py-2",
        variants: {
          primary: "",
          secondary: "bg-gray-500",
        },
      },
    });
  });

  it("should handle multiple clearTheme modifications", () => {
    const base = {
      text: "text-base font-normal",
      color: "text-gray-900",
      padding: "p-4",
    };
    const clearTheme1 = [{ text: true }];
    const clearTheme2 = [{ color: true }];

    expect(resolveTheme([base], [...clearTheme1, ...clearTheme2])).toEqual({
      text: "",
      color: "",
      padding: "p-4",
    });
  });

  it("should correctly apply theme modifications with replace strategy", () => {
    const base = {
      button: {
        base: "px-4 py-2 rounded",
        variants: {
          size: {
            small: "text-sm",
            large: "text-lg",
          },
        },
      },
    };
    const custom = {
      button: {
        base: "px-6 py-3",
        variants: {
          size: {
            small: "text-xs",
            large: "text-xl",
          },
        },
      },
    };
    const applyTheme = [
      {
        button: {
          base: "replace" as const,
          variants: {
            size: {
              small: "replace" as const,
              large: "replace" as const,
            },
          },
        },
      },
    ];

    expect(resolveTheme([base, custom], [], applyTheme)).toEqual({
      button: {
        base: "px-6 py-3",
        variants: {
          size: {
            small: "text-xs",
            large: "text-xl",
          },
        },
      },
    });
  });

  it("should handle empty or undefined custom themes", () => {
    const base = { color: "text-red-400", background: "bg-white" };
    const custom1 = undefined;
    const custom2 = {};

    expect(resolveTheme([base, custom1, custom2], [])).toEqual({
      color: "text-red-400",
      background: "bg-white",
    });
  });
});
