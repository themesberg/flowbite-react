import type { FlowbiteTheme } from "../components/Flowbite/FlowbiteTheme";
import { deepMergeStrings } from "../helpers/deep-merge";
import { twMerge } from "../helpers/tailwind-merge";
import type { ThemeMode } from "../hooks/use-theme-mode";
import type { DeepPartial } from "../types";

export type StoreProps = DeepPartial<{
  mode: ThemeMode;
  prefix: string;
  theme: FlowbiteTheme;
  themeId: number;
}>;

const store: Omit<StoreProps, "theme"> = {};
const themeStore = new Map<number, StoreProps["theme"]>();

export function setStore(data: StoreProps = {}, options: { cleanup?: boolean } = {}) {
  const { mode, prefix, theme, themeId } = data;

  if (mode) {
    store.mode = mode;
  }
  if (prefix) {
    store.prefix = prefix.trim();
  }
  if ("theme" in data && themeId) {
    const currentTheme = themeStore.get(store.themeId ?? -1);

    store.themeId = themeId;
    themeStore.set(themeId, deepMergeStrings(twMerge)(currentTheme, theme));
  }
  if ("themeId" in data && options.cleanup) {
    // TODO: figure out how to avoid this
    if (store.themeId !== undefined) {
      themeStore.delete(store.themeId);
    }
    store.themeId = themeId;
  }
}

export function getMode(): StoreProps["mode"] {
  return store.mode;
}

export function getPrefix(): StoreProps["prefix"] {
  return store.prefix;
}

export function getTheme(): StoreProps["theme"] {
  return themeStore.get(store.themeId ?? -1);
}

export function getThemeId(): StoreProps["themeId"] {
  return store.themeId;
}
