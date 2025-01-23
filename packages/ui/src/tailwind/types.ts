import type { CLASS_LIST_MAP } from "./class-list";

export type ClassList = string[];

export type ComponentName = keyof typeof CLASS_LIST_MAP;

export type PluginOptions = Partial<{
  /**
   * Prefix to apply to base class list
   */
  prefix: string;
  /**
   * Separator to apply to base class list
   */
  separator: string;
  /**
   * Components to compile class list
   */
  components: ComponentName[];
  /**
   * Tailwind version to use for base class list
   *
   * If version is `4` the base class list will be converted to v4 utilities
   * @see https://tailwindcss.com/docs/upgrade-guide#renamed-utilities
   * @default 3
   */
  version: 3 | 4;
}>;
