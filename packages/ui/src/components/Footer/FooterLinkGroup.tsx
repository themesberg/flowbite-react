"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import type { FooterLinkTheme } from "./FooterLink";
import { footerTheme } from "./theme";

export interface FooterLinkGroupTheme {
  base: string;
  link: FooterLinkTheme;
  col: string;
}

export interface FooterLinkGroupProps extends ComponentProps<"ul"> {
  col?: boolean;
  theme?: DeepPartial<FooterLinkGroupTheme>;
  resetTheme?: ResetTheme<FooterLinkGroupTheme>;
}

export const FooterLinkGroup: FC<FooterLinkGroupProps> = ({
  children,
  className,
  col = false,
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([footerTheme.groupLink, provider.theme?.footer?.groupLink, customTheme], [resetTheme]);

  return (
    <ul data-testid="footer-groupLink" className={twMerge(theme.base, col && theme.col, className)} {...props}>
      {children}
    </ul>
  );
};
