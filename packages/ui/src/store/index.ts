import type { ThemeMode } from "../hooks/use-theme-mode";
import type { DeepPartial } from "../types";

export type StoreProps = DeepPartial<{
  /**
   * Whether to generate dark mode styles
   *
   * @default true
   */
  dark: boolean;
  /**
   * Theme mode
   *
   * Can be `"light"`, `"dark"`, or `"auto"`
   *
   * @default "auto"
   */
  mode: ThemeMode;
  /**
   * Prefix to apply to base class list
   *
   * @default undefined
   */
  prefix: string;
  /**
   * The version of Tailwind CSS to use
   *
   * @default 4
   */
  version: 3 | 4;
}>;

const store: StoreProps = {
  dark: undefined,
  mode: undefined,
  prefix: undefined,
  version: undefined,
};

export function setStore(data: StoreProps) {
  if ("dark" in data) {
    store.dark = data.dark;
  }
  if ("mode" in data) {
    if (["light", "dark", "auto"].includes(data.mode!)) {
      store.mode = data.mode;
    } else {
      console.warn(`Invalid mode value: ${data.mode}.\nAvailable values: light, dark, auto`);
    }
  }
  if ("prefix" in data) {
    store.prefix = data.prefix;
  }
  if ("version" in data) {
    if (data.version === 3 || data.version === 4) {
      store.version = data.version;
    } else {
      console.warn(`Invalid version value: ${data.version}.\nAvailable values: 3, 4`);
    }
  }
}

export function getDark(): StoreProps["dark"] {
  return store.dark;
}

export function getMode(): StoreProps["mode"] {
  return store.mode;
}

export function getPrefix(): StoreProps["prefix"] {
  return store.prefix;
}

export function getVersion(): StoreProps["version"] {
  return store.version;
}
