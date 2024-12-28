"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
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

export const FooterLinkGroup: FC<FooterLinkGroupProps> = ({
  children,
  className,
  col = false,
  theme: customTheme,
  resetTheme,
  applyTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [footerTheme.groupLink, provider.theme?.footer?.groupLink, customTheme],
    [get(provider.resetTheme, "footer.groupLink"), resetTheme],
    [get(provider.applyTheme, "footer.groupLink"), applyTheme],
  );

  return (
    <ul data-testid="footer-groupLink" className={twMerge(theme.base, col && theme.col, className)} {...props}>
      {children}
    </ul>
  );
};
