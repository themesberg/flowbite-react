"use client";

import type { ComponentProps } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { FooterLinkTheme } from "./FooterLink";
import { footerTheme } from "./theme";

export interface FooterLinkGroupTheme {
  base: string;
  link: FooterLinkTheme;
  col: string;
}

export interface FooterLinkGroupProps extends ComponentProps<"ul">, ThemingProps<FooterLinkGroupTheme> {
  col?: boolean;
}

export function FooterLinkGroup({
  children,
  className,
  col = false,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: FooterLinkGroupProps) {
  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [footerTheme.groupLink, provider.theme?.footer?.groupLink, customTheme],
    [get(provider.clearTheme, "footer.groupLink"), clearTheme],
    [get(provider.applyTheme, "footer.groupLink"), applyTheme],
  );

  return (
    <ul data-testid="footer-groupLink" className={twMerge(theme.base, col && theme.col, className)} {...props}>
      {children}
    </ul>
  );
}

FooterLinkGroup.displayName = "FooterLinkGroup";
