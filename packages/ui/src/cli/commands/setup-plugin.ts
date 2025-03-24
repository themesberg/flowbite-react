import fs from "fs/promises";

export async function setupPlugin() {
  const configFileMap = {
    astro: ["astro.config.cjs", "astro.config.mjs", "astro.config.ts", "astro.config.js"],
    bun: ["bunfig.toml"],
    farm: ["farm.config.cjs", "farm.config.js", "farm.config.mjs", "farm.config.ts"],
    modernjs: ["modern.config.cjs", "modern.config.mjs", "modern.config.ts", "modern.config.js"],
    nextjs: ["next.config.cjs", "next.config.mjs", "next.config.ts", "next.config.js"],
    parcel: [".parcelrc"],
    rolldown: ["rolldown.config.cjs", "rolldown.config.mjs", "rolldown.config.ts", "rolldown.config.js"],
    rollup: ["rollup.config.cjs", "rollup.config.mjs", "rollup.config.ts", "rollup.config.js"],
    rsbuild: ["rsbuild.config.cjs", "rsbuild.config.mjs", "rsbuild.config.ts", "rsbuild.config.js"],
    rspack: ["rspack.config.cjs", "rspack.config.mjs", "rspack.config.ts", "rspack.config.js"],
    tanstack_start: ["app.config.cjs", "app.config.mjs", "app.config.ts", "app.config.js"],
    vite: ["vite.config.cjs", "vite.config.mjs", "vite.config.ts", "vite.config.js"],
    webpack: ["webpack.config.cjs", "webpack.config.mjs", "webpack.config.ts", "webpack.config.js"],
  };
  const configPathMap: Record<keyof typeof configFileMap, string> = {
    astro: "",
    bun: "",
    farm: "",
    modernjs: "",
    nextjs: "",
    parcel: "",
    rolldown: "",
    rollup: "",
    rsbuild: "",
    rspack: "",
    tanstack_start: "",
    vite: "",
    webpack: "",
  };

  for (const key in configFileMap) {
    const files = configFileMap[key as keyof typeof configFileMap];

    for (const file of files) {
      try {
        await fs.access(file);
        configPathMap[key as keyof typeof configFileMap] = file;
      } catch {
        //
      }
    }
  }

  if (configPathMap.astro) {
    const { setupPluginAstro } = await import("./plugins/setup-plugin-astro");
    await setupPluginAstro(configPathMap.astro);
  }
  if (configPathMap.bun) {
    const { setupPluginBun } = await import("./plugins/setup-plugin-bun");
    await setupPluginBun(configPathMap.bun);
  }
  if (configPathMap.farm) {
    const { setupPluginFarm } = await import("./plugins/setup-plugin-farm");
    await setupPluginFarm(configPathMap.farm);
  }
  if (configPathMap.modernjs) {
    const { setupPluginModernjs } = await import("./plugins/setup-plugin-modernjs");
    await setupPluginModernjs(configPathMap.modernjs);
  }
  if (configPathMap.nextjs) {
    const { setupPluginNextjs } = await import("./plugins/setup-plugin-nextjs");
    await setupPluginNextjs(configPathMap.nextjs);
  }
  if (configPathMap.parcel) {
    const { setupPluginParcel } = await import("./plugins/setup-plugin-parcel");
    await setupPluginParcel(configPathMap.parcel);
  }
  if (configPathMap.rolldown) {
    const { setupPluginRolldown } = await import("./plugins/setup-plugin-rolldown");
    await setupPluginRolldown(configPathMap.rolldown);
  }
  if (configPathMap.rollup) {
    const { setupPluginRollup } = await import("./plugins/setup-plugin-rollup");
    await setupPluginRollup(configPathMap.rollup);
  }
  if (configPathMap.rsbuild) {
    const { setupPluginRsbuild } = await import("./plugins/setup-plugin-rsbuild");
    await setupPluginRsbuild(configPathMap.rsbuild);
  }
  if (configPathMap.rspack) {
    const { setupPluginRspack } = await import("./plugins/setup-plugin-rspack");
    await setupPluginRspack(configPathMap.rspack);
  }
  if (configPathMap.tanstack_start) {
    const { setupPluginTanStackStart } = await import("./plugins/setup-plugin-tanstack-start");
    await setupPluginTanStackStart(configPathMap.tanstack_start);
  }
  if (configPathMap.vite) {
    const { setupPluginVite } = await import("./plugins/setup-plugin-vite");
    await setupPluginVite(configPathMap.vite);
  }
  if (configPathMap.webpack) {
    const { setupPluginWebpack } = await import("./plugins/setup-plugin-webpack");
    await setupPluginWebpack(configPathMap.webpack);
  }

  if (!Object.values(configPathMap).filter(Boolean).length) {
    console.warn(
      "Could not find bundler/framework config file.\n\nSee: https://flowbite-react.com/docs/getting-started/quickstart#integration-guides",
    );
    return;
  }

  return true;
}
