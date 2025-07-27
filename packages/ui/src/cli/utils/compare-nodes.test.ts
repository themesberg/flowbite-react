import { describe, expect, it } from "bun:test";
import { parse } from "recast";
import { compareNodes } from "./compare-nodes";

describe("compareNodes", () => {
  it("should handle basic equality", () => {
    expect(compareNodes(null, null)).toBe(true);
    expect(compareNodes(undefined, undefined)).toBe(true);
    expect(compareNodes(42, 42)).toBe(true);
    expect(compareNodes("hello", "hello")).toBe(true);
    expect(compareNodes(null, undefined)).toBe(false);
    expect(compareNodes(42, "42")).toBe(false);
  });

  it("should compare arrays correctly", () => {
    expect(compareNodes([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(compareNodes([1, 2, 3], [1, 2])).toBe(false);
    expect(compareNodes([1, 2, 3], [1, 2, 4])).toBe(false);
    expect(compareNodes([], [])).toBe(true);
  });

  it("should handle string literals with different quote styles", () => {
    const singleQuotes = parse("const x = 'hello';").program.body[0];
    const doubleQuotes = parse('const x = "hello";').program.body[0];
    expect(compareNodes(singleQuotes, doubleQuotes)).toBe(true);
  });

  it("should handle complex AST nodes with string literals", () => {
    const code1 = `
      const config = {
        dark: true,
        prefix: 'tw-',
        version: 1
      };
    `;

    const code2 = `
      const config = {
        dark: true,
        prefix: "tw-",
        version: 1
      };
    `;

    const ast1 = parse(code1).program;
    const ast2 = parse(code2).program;
    expect(compareNodes(ast1, ast2)).toBe(true);
  });

  it("should handle different AST node types", () => {
    const ast1 = parse("const x = 'hello';").program;
    const ast2 = parse("const x = 42;").program;
    expect(compareNodes(ast1, ast2)).toBe(false);
  });

  it("should ignore location and comment properties", () => {
    const code1 = `
      // This is a comment
      const x = 'hello';
    `;

    const code2 = `
      /* Different comment */
      const x = "hello";
    `;

    const ast1 = parse(code1).program;
    const ast2 = parse(code2).program;
    expect(compareNodes(ast1, ast2)).toBe(true);
  });

  it("should handle template literals", () => {
    const code1 = "const x = `hello`;";
    const code2 = "const x = 'hello';";
    const ast1 = parse(code1).program;
    const ast2 = parse(code2).program;
    expect(compareNodes(ast1, ast2)).toBe(false); // Template literals should be treated differently
  });

  it("should handle object properties with different quote styles", () => {
    const code1 = `
      const obj = {
        'key': 'value',
        "another-key": "value"
      };
    `;

    const code2 = `
      const obj = {
        "key": "value",
        'another-key': 'value'
      };
    `;

    const ast1 = parse(code1).program;
    const ast2 = parse(code2).program;
    expect(compareNodes(ast1, ast2)).toBe(true);
  });

  it("should handle code with and without semicolons", () => {
    // Variable declarations
    const withSemi = parse("const x = 42;").program;
    const withoutSemi = parse("const x = 42").program;
    expect(compareNodes(withSemi, withoutSemi)).toBe(true);

    // Multiple statements
    const multiWithSemi = parse("const x = 1; const y = 2;").program;
    const multiWithoutSemi = parse("const x = 1\nconst y = 2").program;
    expect(compareNodes(multiWithSemi, multiWithoutSemi)).toBe(true);

    // Object declarations
    const objWithSemi = parse("const obj = { a: 1, b: 2 };").program;
    const objWithoutSemi = parse("const obj = { a: 1, b: 2 }").program;
    expect(compareNodes(objWithSemi, objWithoutSemi)).toBe(true);

    // Function declarations
    const funcWithSemi = parse("function test() { return 42; }").program;
    const funcWithoutSemi = parse("function test() { return 42 }").program;
    expect(compareNodes(funcWithSemi, funcWithoutSemi)).toBe(true);
  });

  it("should handle trailing commas in objects and arrays", () => {
    // Single-line objects
    const objNoComma = parse("const obj = { a: 1, b: 2 }").program;
    const objWithComma = parse("const obj = { a: 1, b: 2, }").program;
    expect(compareNodes(objNoComma, objWithComma)).toBe(true);

    // Multi-line objects
    const multilineObjNoComma = parse(`
      const obj = {
        a: 1,
        b: 2
      }
    `).program;
    const multilineObjWithComma = parse(`
      const obj = {
        a: 1,
        b: 2,
      }
    `).program;
    expect(compareNodes(multilineObjNoComma, multilineObjWithComma)).toBe(true);

    // Single-line arrays
    const arrayNoComma = parse("const arr = [1, 2, 3]").program;
    const arrayWithComma = parse("const arr = [1, 2, 3,]").program;
    expect(compareNodes(arrayNoComma, arrayWithComma)).toBe(true);

    // Multi-line arrays
    const multilineArrayNoComma = parse(`
      const arr = [
        1,
        2,
        3
      ]
    `).program;
    const multilineArrayWithComma = parse(`
      const arr = [
        1,
        2,
        3,
      ]
    `).program;
    expect(compareNodes(multilineArrayNoComma, multilineArrayWithComma)).toBe(true);

    // Nested structures
    const nestedNoComma = parse(`
      const nested = {
        obj: { a: 1, b: 2 },
        arr: [1, 2, 3]
      }
    `).program;
    const nestedWithComma = parse(`
      const nested = {
        obj: { a: 1, b: 2, },
        arr: [1, 2, 3,],
      }
    `).program;
    expect(compareNodes(nestedNoComma, nestedWithComma)).toBe(true);
  });
});
