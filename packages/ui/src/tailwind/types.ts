import { CLASS_LIST_MAP } from "./class-list";

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
}>;
