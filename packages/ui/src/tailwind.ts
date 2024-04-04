import flowbitePlugin from "flowbite/plugin";

interface Content {
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
   * const flowbite = require("flowbite-react/tailwind");
   * // esm
   * import flowbite from "flowbite-react/tailwind";
   *
   * {
   *   content: [
   *     // ...
   *     flowbite.content({ base: "../../" })
   *   ],
   *   plugins: [
   *     // ...
   *     flowbite.plugin()
   *   ]
   * }
   * ```
   *
   * @default "./"
   */
  base?: string;
}

export function content({ base = "./" }: Content = {}) {
  const path = "node_modules/flowbite-react/dist/esm/**/*.mjs";

  return `${base}${path}`;
}

export function plugin() {
  return flowbitePlugin;
}
