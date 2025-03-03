import { describe, expect, it } from "vitest";
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
      pluginName: "flowbiteReact()",
      configPath: "vite.plugins",
    });

    const expected = `
export default defineConfig({
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      flowbiteReact()
    ],
  },
})
`;
    expect(result.trim()).toBe(expected.trim());
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
      pluginName: "flowbiteReact()",
      configPath: "vite.plugins",
    });

    const expected = `
export default defineConfig({
  vite: {
    plugins: [flowbiteReact()]
  },
})
`;
    expect(result.trim()).toBe(expected.trim());
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
      pluginName: "flowbiteReact()",
      configPath: "build.options.tools.plugins",
    });

    const expected = `
export default defineConfig({
  build: {
    options: {
      tools: {
        plugins: [flowbiteReact()]
      }
    }
  },
})
`;
    expect(result.trim()).toBe(expected.trim());
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
      pluginName: "flowbiteReact()",
      configPath: "vite.plugins",
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
      pluginName: "flowbiteReact()",
      configPath: "vite.plugins",
    });

    const expected = `
module.exports = {
  vite: {
    plugins: [
      tsConfigPaths(),
      flowbiteReact()
    ],
  },
}
`;
    expect(result.trim()).toBe(expected.trim());
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
      pluginName: "flowbiteReact",
      configPath: "plugins",
    });

    const expected = `
module.exports = {
  plugins: [
    require('tailwindcss'),
    flowbiteReact
  ],
}
`;
    expect(result.trim()).toBe(expected.trim());
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
      pluginName: "flowbiteReact",
      configPath: "plugins",
    });

    const expected = `
export default {
  plugins: [
    require('tailwindcss'),
    flowbiteReact
  ],
}
`;
    expect(result.trim()).toBe(expected.trim());
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
      pluginName: "flowbiteReact()",
      configPath: "plugins",
    });

    const expected = `
import { defineConfig } from 'astro';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    tailwindcss(),
    flowbiteReact()
  ],
});
`;
    expect(result.trim()).toBe(expected.trim());
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
      pluginName: "flowbiteReact()",
      configPath: "vite.plugins",
    });

    const expected = `
export default defineConfig({
  vite: {
    plugins: [
      flowbiteReact()
    ],
  },
})
`;
    expect(result.trim()).toBe(expected.trim());
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
      pluginName: "flowbiteReact()",
      configPath: "vite.plugins",
    });

    const expected = `
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
      flowbiteReact()
    ],
  },
})
`;
    expect(result.trim()).toBe(expected.trim());
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
      pluginName: "flowbiteReact()",
      configPath: "vite.plugins",
    });

    const expected = `
export default defineConfig({
  vite: {
    plugins: [flowbiteReact()]
  },
})
`;
    expect(result.trim()).toBe(expected.trim());
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
      pluginName: "flowbiteReact()",
      configPath: "vite.plugins",
    });

    const expected = `
export default defineConfig({
  vite: {
    root: "src",
    base: "/app/",
    mode: "development",
    plugins: [flowbiteReact()]
  },
})
`;
    expect(result.trim()).toBe(expected.trim());
  });

  it("should create full path when no parent objects exist", () => {
    const content = `
export default defineConfig({
})
`;
    const result = addPlugin({
      content,
      pluginName: "flowbiteReact()",
      configPath: "build.tools.plugins",
    });

    const expected = `
export default defineConfig({
  build: {
    tools: {
      plugins: [flowbiteReact()]
    }
  }
})
`;
    expect(result.trim()).toBe(expected.trim());
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
      pluginName: "flowbiteReact()",
      configPath: "build.tools.config.advanced.plugins",
    });

    const expected = `
export default defineConfig({
  other: {
    settings: true
  },
  build: {
    tools: {
      config: {
        advanced: {
          plugins: [flowbiteReact()]
        }
      }
    }
  }
})
`;
    expect(result.trim()).toBe(expected.trim());
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
      pluginName: "flowbiteReact()",
      configPath: "@custom/scope.plugins",
    });

    const expected = `
export default defineConfig({
  "@custom/scope": {
    plugins: [flowbiteReact()]
  }
})
`;
    expect(result.trim()).toBe(expected.trim());
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
      pluginName: "flowbiteReact()",
      configPath: "vite.plugins",
    });

    const expected = `
export default defineConfig({
    vite: {
        plugins: [
            tsConfigPaths(),
            flowbiteReact()
        ],
    },
})
`;
    expect(result.trim()).toBe(expected.trim());
  });
});
