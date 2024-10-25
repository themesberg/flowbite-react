import React from "react";
import type { ThemeMode } from "../hooks/use-theme-mode";
import { getStore } from "../store";

export interface ThemeModeScriptProps extends React.ComponentPropsWithoutRef<"script"> {
  mode?: ThemeMode;
  /**
   * "light" | "dark" | "auto"
   */
  defaultMode?: ThemeMode;
  /**
   * @default "flowbite-theme-mode"
   */
  localStorageKey?: string;
}

export function ThemeModeScript({
  mode,
  defaultMode = "light",
  localStorageKey = "flowbite-theme-mode",
  ...others
}: ThemeModeScriptProps) {
  return (
    <script
      {...others}
      data-flowbite-theme-mode-script
      dangerouslySetInnerHTML={{
        __html: getScript({ mode, defaultMode, localStorageKey, prefix: getStore().prefix ?? "" }),
      }}
    />
  );
}

function getScript({
  mode,
  defaultMode,
  localStorageKey,
  prefix,
}: {
  mode?: ThemeMode;
  defaultMode: ThemeMode;
  localStorageKey: string;
  prefix: string;
}) {
  return `
    try {
      const mode = window.localStorage.getItem("${localStorageKey}") ?? "${mode}" ?? "${defaultMode}";
      const computedMode =
        mode === "auto" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : mode;

      if (computedMode === "dark") {
        document.documentElement.classList.add("${prefix}dark");
      } else {
        document.documentElement.classList.remove("${prefix}dark");
      }
    } catch (e) {}
  `;
}
