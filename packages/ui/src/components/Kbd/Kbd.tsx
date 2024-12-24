"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import { kbdTheme } from "./theme";

export interface KbdTheme {
  root: KbdRootTheme;
}

export interface KbdRootTheme {
  base: string;
  icon: string;
}

export interface KbdProps extends ComponentProps<"span"> {
  icon?: FC<ComponentProps<"svg">>;
  theme?: DeepPartial<KbdTheme>;
  resetTheme?: ResetTheme<KbdTheme>;
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
