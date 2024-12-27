"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { kbdTheme } from "./theme";

export interface KbdTheme {
  root: KbdRootTheme;
}

export interface KbdRootTheme {
  base: string;
  icon: string;
}

export interface KbdProps extends ComponentProps<"span">, ThemingProps<KbdTheme> {
  icon?: FC<ComponentProps<"svg">>;
}

export const Kbd: FC<KbdProps> = ({ children, className, icon: Icon, theme: customTheme, resetTheme, ...props }) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([kbdTheme, provider.theme?.kbd, customTheme], [resetTheme]);

  return (
    <span className={twMerge(theme.root.base, className)} data-testid="flowbite-kbd" {...props}>
      {Icon && <Icon className={theme.root.icon} data-testid="flowbite-kbd-icon" />}
      {children}
    </span>
  );
};

Kbd.displayName = "Kbd";
