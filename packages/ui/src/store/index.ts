import { deepmerge } from "deepmerge-ts";
import type { FlowbiteTheme } from "../components/Flowbite/FlowbiteTheme";
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
    store.data.prefix = prefix;
  }
  if (theme) {
    if (options.override) {
      // TODO: implement `twMerge()`
      store.data.theme = deepmerge(store.data.theme, theme);
    } else {
      store.data.theme = theme;
    }
  }
}

export function getStore(): StoreProps {
  return structuredClone(store.data);
}
