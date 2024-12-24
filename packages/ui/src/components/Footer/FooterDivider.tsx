"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import { footerTheme } from "./theme";

export interface FlowbiteFooterDividerTheme {
  base: string;
}

export interface FooterDividerProps extends ComponentProps<"hr"> {
  theme?: DeepPartial<FlowbiteFooterDividerTheme>;
  resetTheme?: ResetTheme<FlowbiteFooterDividerTheme>;
}

export const FooterDivider: FC<FooterDividerProps> = ({ className, theme: customTheme, resetTheme, ...props }) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([footerTheme.divider, provider.theme?.footer?.divider, customTheme], [resetTheme]);

  return <hr data-testid="footer-divider" className={twMerge(theme.base, className)} {...props} />;
};
