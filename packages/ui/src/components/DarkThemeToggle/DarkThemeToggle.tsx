"use client";

import type { ComponentProps, FC } from "react";
import type { IconBaseProps } from "react-icons";
import { HiMoon, HiSun } from "react-icons/hi";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeMode } from "../../hooks/use-theme-mode";
import { getStore } from "../../store";
import type { DeepPartial } from "../../types";
import { darkThemeToggleTheme } from "./theme";

export interface FlowbiteDarkThemeToggleTheme {
  root: FlowbiteDarkThemeToggleRootTheme;
}

export interface FlowbiteDarkThemeToggleRootTheme {
  base: string;
  icon: {
    base: string;
    light: string;
    dark: string;
  };
}

export interface DarkThemeToggleProps extends ComponentProps<"button"> {
  iconDark?: FC<IconBaseProps>;
  iconLight?: FC<IconBaseProps>;
  theme?: DeepPartial<FlowbiteDarkThemeToggleTheme>;
}

export const DarkThemeToggle: FC<DarkThemeToggleProps> = ({
  className,
  theme: customTheme,
  iconDark: IconDark = HiSun,
  iconLight: IconLight = HiMoon,
  ...props
}) => {
  const { toggleMode } = useThemeMode();

  const theme = resolveTheme([darkThemeToggleTheme, getStore().theme?.darkThemeToggle, customTheme]);

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      data-testid="dark-theme-toggle"
      className={twMerge(theme.root.base, className)}
      onClick={toggleMode}
      {...props}
    >
      <IconDark aria-label="Currently dark mode" className={twMerge(theme.root.icon.base, theme.root.icon.dark)} />
      <IconLight aria-label="Currently light mode" className={twMerge(theme.root.icon.base, theme.root.icon.light)} />
    </button>
  );
};

DarkThemeToggle.displayName = "DarkThemeToggle";
