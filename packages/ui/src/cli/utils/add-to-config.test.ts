import * as recast from "recast";
import { describe, expect, it } from "vitest";
import { addToConfig } from "./add-to-config";

describe("addToConfig", () => {
  const mockValueGenerator = (b: typeof recast.types.builders) => {
    return b.stringLiteral("test-value");
  };

  it("should add value to config with variable declaration", () => {
    const input = `
      const config = {
        content: [],
        theme: {}
      };
      export default config;
    `;

    const result = addToConfig({
      content: input,
      targetPath: "content",
      valueGenerator: mockValueGenerator,
    });

    expect(result).toContain('"test-value"');
    expect(result).toMatch(/content:\s*\[\s*"test-value"\s*\]/);
  });

  it("should add value to direct export default object", () => {
    const input = `
      export default {
        content: [],
        theme: {}
      };
    `;

    const result = addToConfig({
      content: input,
      targetPath: "content",
      valueGenerator: mockValueGenerator,
    });

    expect(result).toContain('"test-value"');
    expect(result).toMatch(/content:\s*\[\s*"test-value"\s*\]/);
  });

  it("should add value to module.exports object", () => {
    const input = `
      module.exports = {
        content: [],
        theme: {}
      };
    `;

    const result = addToConfig({
      content: input,
      targetPath: "content",
      valueGenerator: mockValueGenerator,
    });

    expect(result).toContain('"test-value"');
    expect(result).toMatch(/content:\s*\[\s*"test-value"\s*\]/);
  });

  it("should add value to config with function call", () => {
    const input = `
      const config = defineConfig({
        content: [],
        theme: {}
      });
      export default config;
    `;

    const result = addToConfig({
      content: input,
      targetPath: "content",
      valueGenerator: mockValueGenerator,
    });

    expect(result).toContain('"test-value"');
    expect(result).toMatch(/content:\s*\[\s*"test-value"\s*\]/);
  });

  it("should add value to nested path", () => {
    const input = `
      export default {
        theme: {
          colors: []
        }
      };
    `;

    const result = addToConfig({
      content: input,
      targetPath: "theme.colors",
      valueGenerator: mockValueGenerator,
    });

    expect(result).toContain('"test-value"');
    expect(result).toMatch(/colors:\s*\[\s*"test-value"\s*\]/);
  });

  it("should preserve existing values when adding new ones", () => {
    const input = `
      export default {
        content: ["./existing-value"],
        theme: {}
      };
    `;

    const result = addToConfig({
      content: input,
      targetPath: "content",
      valueGenerator: mockValueGenerator,
    });

    expect(result).toContain('"./existing-value"');
    expect(result).toContain('"test-value"');
    expect(result).toMatch(/content:\s*\[\s*"\.\/existing-value",\s*"test-value"\s*\]/);
  });

  it("should not add duplicate string values to the array", () => {
    const input = `
      export default {
        content: ["test-value"],
        theme: {}
      };
    `;

    const result = addToConfig({
      content: input,
      targetPath: "content",
      valueGenerator: mockValueGenerator,
    });

    // Normalize whitespace for comparison
    const normalizedInput = input.replace(/\s+/g, " ").trim();
    const normalizedResult = result.replace(/\s+/g, " ").trim();
    expect(normalizedResult).toBe(normalizedInput);
  });

  it("should add value to config using typescript import type and satisfies", () => {
    const input = `
      import type { Config } from './types';
      const config: Config = {
        content: [],
        theme: {}
      };
      export default config;
    `;

    const result = addToConfig({
      content: input,
      targetPath: "content",
      valueGenerator: mockValueGenerator,
    });

    expect(result).toContain('"test-value"');
    expect(result).toMatch(/content:\s*\[\s*"test-value"\s*\]/);
  });
});
