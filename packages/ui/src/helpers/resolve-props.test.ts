import { describe, expect, it, mock } from "bun:test";
import { resolveProps } from "./resolve-props";
import { withoutThemingProps } from "./without-theming-props";

mock.module("./without-theming-props", () => ({
  withoutThemingProps: mock((props) => props),
}));

describe("resolveProps", () => {
  it("should call withoutThemingProps with props", () => {
    const props = { foo: "bar" };
    resolveProps(props);
    expect(withoutThemingProps).toHaveBeenCalledWith(props);
  });

  it("should return props when no providerProps provided", () => {
    const props = { foo: "bar" };
    const result = resolveProps(props);
    expect(result).toEqual(props);
  });

  it("should merge props with providerProps when provided", () => {
    const props = { foo: "bar", baz: "qux" };
    const providerProps = { foo: "provider", test: "provider" };
    const result = resolveProps(props, providerProps);
    expect(result).toEqual({
      foo: "bar",
      baz: "qux",
      // @ts-expect-error - bypass
      test: "provider",
    });
  });

  it("should override providerProps with component props", () => {
    const props = { foo: "component" };
    const providerProps = { foo: "provider" };
    const result = resolveProps(props, providerProps);
    expect(result).toEqual({ foo: "component" });
  });
});
