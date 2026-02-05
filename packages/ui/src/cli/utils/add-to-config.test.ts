import { describe, expect, it } from "bun:test";
import { addToConfig, builders } from "./add-to-config";

describe("addToConfig", () => {
  const mockValueGenerator = (b: typeof builders) => {
    return b.stringLiteral("test-value");
  };

  const mockPluginGenerator = (b: typeof builders) => {
    return b.callExpression("flowbiteReact", []);
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

  it("should add value to config with defineConfig", () => {
    const input = `
      const config: UserConfig = {
        plugins: [react()],
      }

      export default defineConfig(config)
    `;

    const result = addToConfig({
      content: input,
      targetPath: "plugins",
      valueGenerator: mockValueGenerator,
    });

    expect(result).toContain('"test-value"');
    expect(result).toMatch(/plugins:\s*\[\s*react\(\),\s*"test-value"\s*\]/);
  });

  it("should add value to config with filtered array", () => {
    const input = `
      export default defineConfig({
        items: [
          new Plugin({
            option: "value",
          }),
          condition ? new ConditionalPlugin() : null,
        ].filter(Boolean),
      });
    `;

    const result = addToConfig({
      content: input,
      targetPath: "items",
      valueGenerator: mockValueGenerator,
    });

    expect(result).toContain('"test-value"');
    expect(result).toMatch(
      /items:\s*\[\s*new Plugin\({\s*option: "value",\s*}\),\s*condition \? new ConditionalPlugin\(\) : null,\s*"test-value",?\s*\]\.filter\(Boolean\)/,
    );
  });

  describe("array style detection", () => {
    it("should add plugin inline when array is inline style", () => {
      const input = `import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
});
`;

      const result = addToConfig({
        content: input,
        targetPath: "plugins",
        valueGenerator: mockPluginGenerator,
      });

      expect(result).toContain("flowbiteReact()");
      // Should be inline, not on a new line
      expect(result).toMatch(/plugins: \[react\(\), flowbiteReact\(\)\]/);
    });

    it("should add plugin on new line when array is multi-line style with 2-space indent", () => {
      const input = `import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
  ],
});
`;

      const result = addToConfig({
        content: input,
        targetPath: "plugins",
        valueGenerator: mockPluginGenerator,
      });

      expect(result).toContain("flowbiteReact()");
      // Should preserve multi-line style with proper indentation
      expect(result).toMatch(/plugins: \[\n\s+react\(\),\n\s+flowbiteReact\(\),?\n\s*\]/);
    });

    it("should add plugin on new line when array is multi-line style with 4-space indent", () => {
      const input = `import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        react(),
    ],
});
`;

      const result = addToConfig({
        content: input,
        targetPath: "plugins",
        valueGenerator: mockPluginGenerator,
      });

      expect(result).toContain("flowbiteReact()");
      // Should preserve 4-space indentation
      expect(result).toMatch(/plugins: \[\n {8}react\(\),\n {8}flowbiteReact\(\),?\n {4}\]/);
    });

    it("should add plugin on new line when array is multi-line style with tab indent", () => {
      const input = `import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
\tplugins: [
\t\treact(),
\t],
});
`;

      const result = addToConfig({
        content: input,
        targetPath: "plugins",
        valueGenerator: mockPluginGenerator,
      });

      expect(result).toContain("flowbiteReact()");
      // Should preserve tab indentation
      expect(result).toMatch(/plugins: \[\n\t\treact\(\),\n\t\tflowbiteReact\(\),?\n\t\]/);
    });

    it("should handle multi-line array with trailing comma", () => {
      const input = `export default {
  plugins: [
    plugin1(),
    plugin2(),
  ],
};
`;

      const result = addToConfig({
        content: input,
        targetPath: "plugins",
        valueGenerator: mockPluginGenerator,
      });

      expect(result).toContain("flowbiteReact()");
      // Should add after trailing comma
      expect(result).toMatch(/plugin2\(\),\n {4}flowbiteReact\(\)/);
    });

    it("should handle multi-line array without trailing comma", () => {
      const input = `export default {
  plugins: [
    plugin1(),
    plugin2()
  ],
};
`;

      const result = addToConfig({
        content: input,
        targetPath: "plugins",
        valueGenerator: mockPluginGenerator,
      });

      expect(result).toContain("flowbiteReact()");
      // Should add comma and new element
      expect(result).toMatch(/plugin2\(\),\n {4}flowbiteReact\(\)/);
    });

    it("should handle inline array with multiple elements", () => {
      const input = `export default {
  plugins: [a(), b(), c()],
};
`;

      const result = addToConfig({
        content: input,
        targetPath: "plugins",
        valueGenerator: mockPluginGenerator,
      });

      expect(result).toContain("flowbiteReact()");
      // Should stay inline
      expect(result).toMatch(/plugins: \[a\(\), b\(\), c\(\), flowbiteReact\(\)\]/);
    });

    it("should create new property with detected indent unit (4 spaces)", () => {
      const input = `export default {
    theme: {},
};
`;

      const result = addToConfig({
        content: input,
        targetPath: "plugins",
        valueGenerator: mockPluginGenerator,
      });

      expect(result).toContain("flowbiteReact()");
      // Should use 4-space indentation
      expect(result).toMatch(/theme: {},\n {4}plugins: \[flowbiteReact\(\)\]/);
    });

    it("should create new property with detected indent unit (tabs)", () => {
      const input = `export default {
\ttheme: {},
};
`;

      const result = addToConfig({
        content: input,
        targetPath: "plugins",
        valueGenerator: mockPluginGenerator,
      });

      expect(result).toContain("flowbiteReact()");
      // Should use tab indentation
      expect(result).toMatch(/theme: {},\n\tplugins: \[flowbiteReact\(\)\]/);
    });
  });
});
