"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
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

export function Kbd({
  children,
  className,
  icon: Icon,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: KbdProps) {
  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [kbdTheme, provider.theme?.kbd, customTheme],
    [get(provider.clearTheme, "kbd"), clearTheme],
    [get(provider.applyTheme, "kbd"), applyTheme],
  );

  return (
    <span className={twMerge(theme.root.base, className)} data-testid="flowbite-kbd" {...props}>
      {Icon && <Icon className={theme.root.icon} data-testid="flowbite-kbd-icon" />}
      {children}
    </span>
  );
}

Kbd.displayName = "Kbd";
