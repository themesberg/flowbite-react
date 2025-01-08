"use client";

import type { ComponentProps } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { FooterBrandTheme } from "./FooterBrand";
import type { FooterCopyrightTheme } from "./FooterCopyright";
import type { FooterDividerTheme } from "./FooterDivider";
import type { FooterIconTheme } from "./FooterIcon";
import type { FooterLinkGroupTheme } from "./FooterLinkGroup";
import type { FooterTitleTheme } from "./FooterTitle";
import { footerTheme } from "./theme";

export interface FooterTheme {
  brand: FooterBrandTheme;
  copyright: FooterCopyrightTheme;
  divider: FooterDividerTheme;
  groupLink: FooterLinkGroupTheme;
  icon: FooterIconTheme;
  root: FooterRootTheme;
  title: FooterTitleTheme;
}

export interface FooterRootTheme {
  base: string;
  bgDark: string;
  container: string;
}

export interface FooterProps extends ComponentProps<"footer">, ThemingProps<FooterTheme> {
  bgDark?: boolean;
  container?: boolean;
}

export function Footer({
  bgDark = false,
  children,
  className,
  container = false,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: FooterProps) {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [footerTheme, provider.theme?.footer, customTheme],
    [get(provider.clearTheme, "footer"), clearTheme],
    [get(provider.applyTheme, "footer"), applyTheme],
  );

  return (
    <footer
      data-testid="flowbite-footer"
      className={twMerge(theme.root.base, bgDark && theme.root.bgDark, container && theme.root.container, className)}
      {...props}
    >
      {children}
    </footer>
  );
}

Footer.displayName = "Footer";
