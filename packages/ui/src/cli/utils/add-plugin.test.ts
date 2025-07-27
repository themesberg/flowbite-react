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

    const expected = `
export default defineConfig({
  vite: {
    plugins: [tsConfigPaths({
      projects: ['./tsconfig.json'],
    }), flowbiteReact()],
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
      targetPath: "vite.plugins",
      pluginName: "flowbiteReact",
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
      targetPath: "build.options.tools.plugins",
      pluginName: "flowbiteReact",
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

    const expected = `
module.exports = {
  vite: {
    plugins: [tsConfigPaths(), flowbiteReact()],
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
      targetPath: "plugins",
      pluginName: "flowbiteReact",
    });

    const expected = `
module.exports = {
  plugins: [require('tailwindcss'), flowbiteReact()],
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
      targetPath: "plugins",
      pluginName: "flowbiteReact",
    });

    const expected = `
export default {
  plugins: [require('tailwindcss'), flowbiteReact()],
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
      targetPath: "plugins",
      pluginName: "flowbiteReact",
    });

    const expected = `
import { defineConfig } from 'astro';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [tailwindcss(), flowbiteReact()],
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
      targetPath: "vite.plugins",
      pluginName: "flowbiteReact",
    });

    const expected = `
export default defineConfig({
  vite: {
    plugins: [flowbiteReact()],
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
      targetPath: "vite.plugins",
      pluginName: "flowbiteReact",
    });

    const expected = `
export default defineConfig({
  vite: {
    plugins: [tsConfigPaths(), vitePluginRequire(), vuePlugin({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("-"),
        },
      },
    }), flowbiteReact()],
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
      targetPath: "vite.plugins",
      pluginName: "flowbiteReact",
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
      targetPath: "vite.plugins",
      pluginName: "flowbiteReact",
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
      targetPath: "build.tools.plugins",
      pluginName: "flowbiteReact",
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
      targetPath: "build.tools.config.advanced.plugins",
      pluginName: "flowbiteReact",
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
      targetPath: "@custom/scope.plugins",
      pluginName: "flowbiteReact",
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
      targetPath: "vite.plugins",
      pluginName: "flowbiteReact",
    });

    const expected = `
export default defineConfig({
    vite: {
        plugins: [tsConfigPaths(), flowbiteReact()],
    },
})
`;
    expect(result.trim()).toBe(expected.trim());
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

    const expected = `const config = {
  vite: {
    plugins: [flowbiteReact()],
  },
};
export default config;`;
    expect(result.trim()).toBe(expected.trim());
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

    const expected = `const config = {
  vite: {
    plugins: [flowbiteReact()],
  },
};
module.exports = config;`;
    expect(result.trim()).toBe(expected.trim());
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

    const expected = `const config = defineConfig({
  vite: {
    plugins: [flowbiteReact()],
  },
});
export default config;`;
    expect(result.trim()).toBe(expected.trim());
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

    const expected = `const config = defineConfig({
  vite: {
    plugins: [flowbiteReact()],
  },
});
module.exports = config;`;
    expect(result.trim()).toBe(expected.trim());
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

    const expected = `export default {
  // This is a comment
  vite: {
    plugins: [tsConfigPaths(), flowbiteReact()],
  },
}`;
    expect(result.trim()).toBe(expected.trim());
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

    const expected = `export default {
  vite: {
    build: {
      // This is a nested comment
      rollupOptions: {
        plugins: [flowbiteReact()],
      },
    },
  },
}`;
    expect(result.trim()).toBe(expected.trim());
  });
});
