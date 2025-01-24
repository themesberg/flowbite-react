import type { ThemeMode } from "../hooks/use-theme-mode";
import type { DeepPartial } from "../types";

export type StoreProps = DeepPartial<{
  mode: ThemeMode;
  /**
   * Prefix to apply to base class list
   */
  prefix: string;
  /**
   * Separator to apply to base class list
   */
  separator: string;
  /**
   * Tailwind version to use for base class list
   *
   * If version is `4` the base class list will be converted to v4 utilities
   * @see https://tailwindcss.com/docs/upgrade-guide#renamed-utilities
   * @default 4
   */
  version: 3 | 4;
}>;

const store: StoreProps = {
  mode: undefined,
  prefix: undefined,
  separator: undefined,
  version: 4,
};

export function setStore(data: StoreProps) {
  if ("mode" in data) {
    store.mode = data.mode;
  }
  if ("prefix" in data) {
    store.prefix = data.prefix;
  }
  if ("separator" in data) {
    store.separator = data.separator;
  }
  if ("version" in data) {
    store.version = data.version;
  }
}

export function getMode(): StoreProps["mode"] {
  return store.mode;
}

export function getPrefix(): StoreProps["prefix"] {
  return store.prefix;
}

export function getSeparator(): StoreProps["separator"] {
  return store.separator;
}

export function getVersion(): StoreProps["version"] {
  return store.version;
}
