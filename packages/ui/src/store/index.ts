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
}>;

const store: StoreProps = {
  dark: undefined,
  mode: undefined,
  prefix: undefined,
};

export function setStore(data: StoreProps) {
  if ("dark" in data) {
    store.dark = data.dark;
  }
  if ("mode" in data) {
    store.mode = data.mode;
  }
  if ("prefix" in data) {
    store.prefix = data.prefix;
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
