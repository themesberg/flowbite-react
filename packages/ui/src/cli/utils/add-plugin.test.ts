import { describe, expect, it } from "bun:test";
import { addPlugin } from "./add-plugin";

describe("addPlugin", () => {
  it("should add a plugin to an existing plugins array", () => {
    const content = `
export default defineConfig({
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
  },
})
`;
    const result = addPlugin({
      content,
      targetPath: "vite.plugins",
      pluginName: "flowbiteReact",
    });

    // Verify plugin is added
    expect(result).toContain("flowbiteReact()");
    // Verify plugin is in the plugins array
    expect(result).toMatch(/plugins:\s*\[[\s\S]*flowbiteReact\(\)[\s\S]*\]/);
    // Verify original plugin is preserved
    expect(result).toContain("tsConfigPaths(");
  });

  it("should create a plugins array if it doesn't exist", () => {
    const content = `
export default defineConfig({
  vite: {
  },
})
`;
    const result = addPlugin({
      content,
      targetPath: "vite.plugins",
      pluginName: "flowbiteReact",
    });

    // Verify plugins array is created with the plugin
    expect(result).toContain("plugins:");
    expect(result).toContain("flowbiteReact()");
    expect(result).toMatch(/plugins:\s*\[\s*flowbiteReact\(\)\s*\]/);
  });

  it("should handle nested config paths", () => {
    const content = `
export default defineConfig({
  build: {
    options: {
      tools: {
      }
    }
  },
})
`;
    const result = addPlugin({
      content,
      targetPath: "build.options.tools.plugins",
      pluginName: "flowbiteReact",
    });

    // Verify plugin is added in nested path
    expect(result).toContain("plugins:");
    expect(result).toContain("flowbiteReact()");
    expect(result).toMatch(/tools:\s*\{[\s\S]*plugins:\s*\[\s*flowbiteReact\(\)\s*\]/);
  });

  it("should not add the plugin if it already exists", () => {
    const content = `
export default defineConfig({
  vite: {
    plugins: [
      tsConfigPaths(),
      flowbiteReact()
    ],
  },
})
`;
    const result = addPlugin({
      content,
      targetPath: "vite.plugins",
      pluginName: "flowbiteReact",
    });

    expect(result.trim()).toBe(content.trim());
  });

  it("should handle different export styles", () => {
    const content = `
module.exports = {
  vite: {
    plugins: [
      tsConfigPaths(),
    ],
  },
}
`;
    const result = addPlugin({
      content,
      targetPath: "vite.plugins",
      pluginName: "flowbiteReact",
    });

    // Verify plugin is added
    expect(result).toContain("flowbiteReact()");
    expect(result).toMatch(/plugins:\s*\[[\s\S]*tsConfigPaths\(\)[\s\S]*flowbiteReact\(\)[\s\S]*\]/);
  });

  it("should add a plugin to an existing plugins array in tailwind.config.js (CJS)", () => {
    const content = `
module.exports = {
  plugins: [
    require('tailwindcss'),
  ],
}
`;
    const result = addPlugin({
      content,
      targetPath: "plugins",
      pluginName: "flowbiteReact",
    });

    expect(result).toContain("flowbiteReact()");
    expect(result).toContain("require('tailwindcss')");
    expect(result).toMatch(/plugins:\s*\[[\s\S]*require\('tailwindcss'\)[\s\S]*flowbiteReact\(\)[\s\S]*\]/);
  });

  it("should add a plugin to an existing plugins array in tailwind.config.js (ESM)", () => {
    const content = `
export default {
  plugins: [
    require('tailwindcss'),
  ],
}
`;
    const result = addPlugin({
      content,
      targetPath: "plugins",
      pluginName: "flowbiteReact",
    });

    expect(result).toContain("flowbiteReact()");
    expect(result).toContain("require('tailwindcss')");
    expect(result).toMatch(/plugins:\s*\[[\s\S]*require\('tailwindcss'\)[\s\S]*flowbiteReact\(\)[\s\S]*\]/);
  });

  it("should add a plugin to an existing plugins array in astro.config.mjs", () => {
    const content = `
import { defineConfig } from 'astro';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
});
`;
    const result = addPlugin({
      content,
      targetPath: "plugins",
      pluginName: "flowbiteReact",
    });

    expect(result).toContain("flowbiteReact()");
    expect(result).toContain("tailwindcss()");
    expect(result).toMatch(/plugins:\s*\[[\s\S]*tailwindcss\(\)[\s\S]*flowbiteReact\(\)[\s\S]*\]/);
  });

  it("should add a plugin to an empty array", () => {
    const content = `
export default defineConfig({
  vite: {
    plugins: [],
  },
})
`;
    const result = addPlugin({
      content,
      targetPath: "vite.plugins",
      pluginName: "flowbiteReact",
    });

    expect(result).toContain("flowbiteReact()");
    expect(result).toMatch(/plugins:\s*\[\s*flowbiteReact\(\)\s*\]/);
  });

  it("should add a plugin after multiple existing plugins", () => {
    const content = `
export default defineConfig({
  vite: {
    plugins: [
      tsConfigPaths(),
      vitePluginRequire(),
      vuePlugin({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag.includes("-"),
          },
        },
      }),
    ],
  },
})
`;
    const result = addPlugin({
      content,
      targetPath: "vite.plugins",
      pluginName: "flowbiteReact",
    });

    // Verify all plugins are present
    expect(result).toContain("tsConfigPaths()");
    expect(result).toContain("vitePluginRequire()");
    expect(result).toContain("vuePlugin(");
    expect(result).toContain("flowbiteReact()");
    // Verify flowbiteReact is added to the array
    expect(result).toMatch(/plugins:\s*\[[\s\S]*flowbiteReact\(\)[\s\S]*\]/);
  });

  it("should create plugins array in an empty parent object", () => {
    const content = `
export default defineConfig({
  vite: {
  },
})
`;
    const result = addPlugin({
      content,
      targetPath: "vite.plugins",
      pluginName: "flowbiteReact",
    });

    expect(result).toContain("plugins:");
    expect(result).toContain("flowbiteReact()");
    expect(result).toMatch(/vite:\s*\{[\s\S]*plugins:\s*\[\s*flowbiteReact\(\)\s*\]/);
  });

  it("should create plugins array in a parent object with other properties", () => {
    const content = `
export default defineConfig({
  vite: {
    root: "src",
    base: "/app/",
    mode: "development"
  },
})
`;
    const result = addPlugin({
      content,
      targetPath: "vite.plugins",
      pluginName: "flowbiteReact",
    });

    // Verify existing properties are preserved
    expect(result).toContain('root: "src"');
    expect(result).toContain('base: "/app/"');
    expect(result).toContain('mode: "development"');
    // Verify plugins array is added
    expect(result).toContain("plugins:");
    expect(result).toContain("flowbiteReact()");
  });

  it("should create full path when no parent objects exist", () => {
    const content = `
export default defineConfig({
})
`;
    const result = addPlugin({
      content,
      targetPath: "build.tools.plugins",
      pluginName: "flowbiteReact",
    });

    // Verify nested structure is created
    expect(result).toContain("build:");
    expect(result).toContain("tools:");
    expect(result).toContain("plugins:");
    expect(result).toContain("flowbiteReact()");
  });

  it("should create full path with deeply nested config", () => {
    const content = `
export default defineConfig({
  other: {
    settings: true
  }
})
`;
    const result = addPlugin({
      content,
      targetPath: "build.tools.config.advanced.plugins",
      pluginName: "flowbiteReact",
    });

    // Verify existing config is preserved
    expect(result).toContain("other:");
    expect(result).toContain("settings: true");
    // Verify nested structure is created
    expect(result).toContain("build:");
    expect(result).toContain("tools:");
    expect(result).toContain("config:");
    expect(result).toContain("advanced:");
    expect(result).toContain("plugins:");
    expect(result).toContain("flowbiteReact()");
  });

  it("should handle config paths with special characters", () => {
    const content = `
export default defineConfig({
  "@custom/scope": {
  }
})
`;
    const result = addPlugin({
      content,
      targetPath: "@custom/scope.plugins",
      pluginName: "flowbiteReact",
    });

    expect(result).toContain("plugins:");
    expect(result).toContain("flowbiteReact()");
  });

  it("should handle mixed indentation in existing config", () => {
    const content = `
export default defineConfig({
    vite: {
        plugins: [
            tsConfigPaths(),
        ],
    },
})
`;
    const result = addPlugin({
      content,
      targetPath: "vite.plugins",
      pluginName: "flowbiteReact",
    });

    expect(result).toContain("tsConfigPaths()");
    expect(result).toContain("flowbiteReact()");
    expect(result).toMatch(/plugins:\s*\[[\s\S]*tsConfigPaths\(\)[\s\S]*flowbiteReact\(\)[\s\S]*\]/);
  });

  it("should handle default exported value inside a variable", () => {
    const content = `const config = {
  vite: {
    plugins: [],
  },
};
export default config;`;
    const result = addPlugin({
      content,
      targetPath: "vite.plugins",
      pluginName: "flowbiteReact",
    });

    expect(result).toContain("flowbiteReact()");
    expect(result).toMatch(/plugins:\s*\[\s*flowbiteReact\(\)\s*\]/);
  });

  it("should handle default exported value inside a variable in CJS format", () => {
    const content = `const config = {
  vite: {
    plugins: [],
  },
};
module.exports = config;`;
    const result = addPlugin({
      content,
      targetPath: "vite.plugins",
      pluginName: "flowbiteReact",
    });

    expect(result).toContain("flowbiteReact()");
    expect(result).toMatch(/plugins:\s*\[\s*flowbiteReact\(\)\s*\]/);
  });

  it("should handle defineConfig with default exported value", () => {
    const content = `const config = defineConfig({
  vite: {
    plugins: [],
  },
});
export default config;`;
    const result = addPlugin({
      content,
      targetPath: "vite.plugins",
      pluginName: "flowbiteReact",
    });

    expect(result).toContain("flowbiteReact()");
    expect(result).toMatch(/plugins:\s*\[\s*flowbiteReact\(\)\s*\]/);
  });

  it("should handle defineConfig with default exported value in CJS format", () => {
    const content = `const config = defineConfig({
  vite: {
    plugins: [],
  },
});
module.exports = config;`;
    const result = addPlugin({
      content,
      targetPath: "vite.plugins",
      pluginName: "flowbiteReact",
    });

    expect(result).toContain("flowbiteReact()");
    expect(result).toMatch(/plugins:\s*\[\s*flowbiteReact\(\)\s*\]/);
  });

  it("should preserve comments in configuration", () => {
    const content = `export default {
  // This is a comment
  vite: {
    plugins: [
      tsConfigPaths(),
    ],
  },
}`;
    const result = addPlugin({
      content,
      targetPath: "vite.plugins",
      pluginName: "flowbiteReact",
    });

    // Verify comment is preserved
    expect(result).toContain("// This is a comment");
    // Verify plugin is added
    expect(result).toContain("tsConfigPaths()");
    expect(result).toContain("flowbiteReact()");
  });

  it("should handle comments within nested objects", () => {
    const content = `export default {
  vite: {
    build: {
      // This is a nested comment
      rollupOptions: {
        plugins: [],
      },
    },
  },
}`;
    const result = addPlugin({
      content,
      targetPath: "vite.build.rollupOptions.plugins",
      pluginName: "flowbiteReact",
    });

    // Verify comment is preserved
    expect(result).toContain("// This is a nested comment");
    // Verify plugin is added
    expect(result).toContain("flowbiteReact()");
  });
});
