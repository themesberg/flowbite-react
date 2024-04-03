import flowbitePlugin from "flowbite/plugin";
import plugin from "tailwindcss/plugin";

const CONTENT_PATH = "node_modules/flowbite-react/dist/esm/**/*.mjs";

interface Options {
  /**
   * Path to `node_modules` where `flowbite-react` is installed
   *
   * ===============================================
   *
   * For monorepo setup where `flowbite-react` is installed in the root `node_modules` but used in `apps/web` directory
   * @example
   * ```
   * // tailwind.config.(js|cjs|mjs) file
   *
   * // cjs
   * plugins: [require("flowbite-react/plugin")({ dir: "../../" })]
   *
   * // esm
   * import flowbite from "flowbite-react/plugin"
   *
   * plugins: [flowbite({ dir: "../../" })]
   * ```
   *
   * @default "./"
   */
  dir?: string;
}

export default plugin.withOptions<Options>(
  (options = {}) =>
    ({ config: getConfig }) => {
      const config = getConfig();

      if ("files" in config.content) {
        const { dir = "./" } = options;

        config.content.files.push(`${dir}${CONTENT_PATH}`);
      }
    },
  () => ({
    plugins: [flowbitePlugin],
  }),
);
