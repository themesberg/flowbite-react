import plugin from "tailwindcss/plugin";
import classList from "./class-list.json";
import { applyPrefix } from "./helpers/apply-prefix";

export type PluginOptions = Partial<{
  /**
   * Prefix to apply to base class list
   */
  prefix: string;
  /**
   * Components to compile class list
   */
  components: string[];
}>;

export default plugin.withOptions<PluginOptions>(
  // plugin
  () => () => {},
  // config
  ({ prefix } = {}) => ({
    safelist: prefix ? classList.map((className) => applyPrefix(className, prefix)) : classList,
  }),
);
