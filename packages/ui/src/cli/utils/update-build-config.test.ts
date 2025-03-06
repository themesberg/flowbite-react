import { describe, expect, it } from "vitest";
import { updateBuildConfig } from "./update-build-config";

describe("updateBuildConfig", () => {
  it("should add plugin and import when no plugins exist", () => {
    const input = `
      import build from 'bun';

      const result = await build({
        entrypoints,
        outdir,
        minify: true,
      });
    `;

    const result = updateBuildConfig({
      content: input,
      pluginName: "flowbiteReact",
      pluginImportPath: "flowbite-react/plugin/test",
    });

    expect(result).toContain('import flowbiteReact from "flowbite-react/plugin/test"');
    expect(result).toMatch(/plugins:\s*\[\s*flowbiteReact\s*\]/);
  });

  it("should add plugin to existing plugins array", () => {
    const input = `
      import build from 'bun';
      import { existingPlugin } from './plugins';

      const result = await build({
        entrypoints,
        outdir,
        plugins: [existingPlugin],
        minify: true,
      });
    `;

    const result = updateBuildConfig({
      content: input,
      pluginName: "flowbiteReact",
      pluginImportPath: "flowbite-react/plugin/test",
    });

    expect(result).toContain('import flowbiteReact from "flowbite-react/plugin/test"');
    expect(result).toMatch(/plugins:\s*\[\s*existingPlugin,\s*flowbiteReact\s*\]/);
  });

  it("should not add plugin if it already exists", () => {
    const input = `
      import build from 'bun';
      import flowbiteReact from "flowbite-react/plugin/test";

      const result = await build({
        entrypoints,
        outdir,
        plugins: [flowbiteReact],
        minify: true,
      });
    `;

    const result = updateBuildConfig({
      content: input,
      pluginName: "flowbiteReact",
      pluginImportPath: "flowbite-react/plugin/test",
    });

    // Should not add duplicate import or plugin
    expect(result.match(/import flowbiteReact/g)?.length).toBe(1);
    expect(result.match(/flowbiteReact/g)?.length).toBe(2); // One in import, one in plugins array
  });

  it("should work with custom plugin name", () => {
    const input = `
      import build from 'bun';

      const result = await build({
        entrypoints,
        outdir,
        minify: true,
      });
    `;

    const result = updateBuildConfig({
      content: input,
      pluginName: "customPlugin",
      pluginImportPath: "@custom/plugin",
    });

    expect(result).toContain('import customPlugin from "@custom/plugin"');
    expect(result).toMatch(/plugins:\s*\[\s*customPlugin\s*\]/);
  });
});
