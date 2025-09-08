import { describe, expect, it } from "bun:test";
import { wrapDefaultExport } from "./wrap-default-export";

describe("wrapDefaultExport", () => {
  it("wraps ESM default export correctly", () => {
    const input = "export default myFunction;";
    const expected = "export default wrapper(myFunction);";
    expect(wrapDefaultExport(input, "wrapper")).toBe(expected);
  });

  it("wraps ESM default export correctly without trailing comma", () => {
    const input = "export default myFunction";
    const expected = "export default wrapper(myFunction)";
    expect(wrapDefaultExport(input, "wrapper")).toBe(expected);
  });

  it("wraps ESM default export correctly without semicolon", () => {
    const input = "export default myFunction";
    const expected = "export default wrapper(myFunction)";
    expect(wrapDefaultExport(input, "wrapper")).toBe(expected);
  });

  it("wraps CJS module.exports correctly", () => {
    const input = "module.exports = myFunction;";
    const expected = "module.exports = wrapper(myFunction);";
    expect(wrapDefaultExport(input, "wrapper")).toBe(expected);
  });

  it("wraps CJS module.exports correctly without trailing comma", () => {
    const input = "module.exports = myFunction";
    const expected = "module.exports = wrapper(myFunction)";
    expect(wrapDefaultExport(input, "wrapper")).toBe(expected);
  });

  it("wraps CJS module.exports correctly without semicolon", () => {
    const input = "module.exports = myFunction";
    const expected = "module.exports = wrapper(myFunction)";
    expect(wrapDefaultExport(input, "wrapper")).toBe(expected);
  });

  it("returns original content if no default export is found", () => {
    const input = "const a = 10;";
    expect(wrapDefaultExport(input, "wrapper")).toBe(input);
  });

  it("handles complex ESM export values", () => {
    const input = 'export default () => console.log("Hello");';
    const expected = 'export default wrapper(() => console.log("Hello"));';
    expect(wrapDefaultExport(input, "wrapper")).toBe(expected);
  });

  it("handles complex ESM export values without trailing comma", () => {
    const input = 'export default () => console.log("Hello")';
    const expected = 'export default wrapper(() => console.log("Hello"))';
    expect(wrapDefaultExport(input, "wrapper")).toBe(expected);
  });

  it("handles complex ESM export values without semicolon", () => {
    const input = 'export default () => console.log("Hello")';
    const expected = 'export default wrapper(() => console.log("Hello"))';
    expect(wrapDefaultExport(input, "wrapper")).toBe(expected);
  });

  it("handles complex CJS export values", () => {
    const input = "module.exports = function() { return 42; };";
    const expected = "module.exports = wrapper(function() { return 42; });";
    expect(wrapDefaultExport(input, "wrapper")).toBe(expected);
  });

  it("handles complex CJS export values without trailing comma", () => {
    const input = "module.exports = function() { return 42; }";
    const expected = "module.exports = wrapper(function() { return 42; })";
    expect(wrapDefaultExport(input, "wrapper")).toBe(expected);
  });

  it("handles complex CJS export values without semicolon", () => {
    const input = "module.exports = function() { return 42; }";
    const expected = "module.exports = wrapper(function() { return 42; })";
    expect(wrapDefaultExport(input, "wrapper")).toBe(expected);
  });

  it("doesn't modify non-expression ESM exports", () => {
    const input = "export default class MyClass {}";
    expect(wrapDefaultExport(input, "wrapper")).toBe(input);
  });

  it("handles multiple exports but only wraps default/module.exports", () => {
    const input = `
export const a = 1;
export default myFunction;
export const b = 2;`;
    const expected = `
export const a = 1;
export default wrapper(myFunction);
export const b = 2;`;
    expect(wrapDefaultExport(input, "wrapper").trim()).toBe(expected.trim());
  });

  it("handles mixed ESM and CJS in the same file", () => {
    const input = `
export const a = 1;
module.exports = myFunction;`;
    const expected = `
export const a = 1;
module.exports = wrapper(myFunction);`;
    expect(wrapDefaultExport(input, "wrapper").trim()).toBe(expected.trim());
  });

  it("handles complex multiline exports with nested function calls and objects", () => {
    const input = `import { withHOC } from "./utils";
import type { Config } from "./types";

const config: Config = {
  /* config options here */
};

export default withHOC(config, {
  feature1: true,
  feature2: "enabled",
  callbacks: {
    onInit: () => console.log("initialized"),
    onUpdate: (data) => console.log("updated:", data)
  },
  options: [
    { id: 1, value: "first" },
    { id: 2, value: "second" }
  ]
});`;

    const expected = `import { withHOC } from "./utils";
import type { Config } from "./types";

const config: Config = {
  /* config options here */
};

export default wrapper(withHOC(config, {
  feature1: true,
  feature2: "enabled",
  callbacks: {
    onInit: () => console.log("initialized"),
    onUpdate: (data) => console.log("updated:", data)
  },
  options: [
    { id: 1, value: "first" },
    { id: 2, value: "second" }
  ]
}));`;

    expect(wrapDefaultExport(input, "wrapper")).toBe(expected);
  });

  it("handles complex multiline CJS exports with nested function calls and objects", () => {
    const input = `const { withHOC } = require("./utils");

const config = {
  /* config options here */
};

module.exports = withHOC(config, {
  feature1: true,
  feature2: "enabled",
  callbacks: {
    onInit: () => console.log("initialized"),
    onUpdate: (data) => console.log("updated:", data)
  },
  options: [
    { id: 1, value: "first" },
    { id: 2, value: "second" }
  ]
});`;

    const expected = `const { withHOC } = require("./utils");

const config = {
  /* config options here */
};

module.exports = wrapper(withHOC(config, {
  feature1: true,
  feature2: "enabled",
  callbacks: {
    onInit: () => console.log("initialized"),
    onUpdate: (data) => console.log("updated:", data)
  },
  options: [
    { id: 1, value: "first" },
    { id: 2, value: "second" }
  ]
}));`;

    expect(wrapDefaultExport(input, "wrapper")).toBe(expected);
  });
});
