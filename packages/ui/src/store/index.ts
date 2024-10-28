import type { FlowbiteTheme } from "../components/Flowbite/FlowbiteTheme";
import { deepMergeStrings } from "../helpers/deep-merge";
import { twMerge } from "../helpers/tailwind-merge";
import type { ThemeMode } from "../hooks/use-theme-mode";
import type { DeepPartial } from "../types";

export type StoreProps = DeepPartial<{
  mode: ThemeMode;
  prefix: string;
  theme: FlowbiteTheme;
}>;

interface Store {
  data: StoreProps;
}

const store: Store = {
  data: {},
};

export function setStore(data: StoreProps = {}, options: { override?: boolean } = {}) {
  const { mode, prefix, theme } = data;

  if (mode) {
    store.data.mode = mode;
  }
  if (prefix) {
    store.data.prefix = prefix.trim();
  }
  if ("theme" in data) {
    if (options.override) {
      store.data.theme = theme;
    } else {
      store.data.theme = deepMergeStrings(twMerge)(store.data.theme, theme);
    }
  }
}

export function getStore(): StoreProps {
  return structuredClone(store.data);
}
