import unpluginVite from "./vite";

export default () => ({
  name: "unplugin-starter",
  hooks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "astro:config:setup": async (astro: any) => {
      astro.config.vite.plugins ||= [];
      astro.config.vite.plugins.push(unpluginVite);
    },
  },
});
