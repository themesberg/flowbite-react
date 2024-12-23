"use client";

import type { ComponentProps, FC } from "react";
import type { IconBaseProps } from "react-icons";
import { HiMoon, HiSun } from "react-icons/hi";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeMode } from "../../hooks/use-theme-mode";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, Unstyled } from "../../types";
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
  unstyled?: Unstyled<FlowbiteDarkThemeToggleTheme>;
}

export const DarkThemeToggle: FC<DarkThemeToggleProps> = ({
  className,
  iconDark: IconDark = HiSun,
  iconLight: IconLight = HiMoon,
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const { toggleMode } = useThemeMode();

  const provider = useThemeProvider();
  const theme = resolveTheme([darkThemeToggleTheme, provider.theme?.darkThemeToggle, customTheme], [unstyled]);

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
