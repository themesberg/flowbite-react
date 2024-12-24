"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, Unstyled } from "../../types";
import { footerTheme } from "./theme";

export interface FlowbiteFooterDividerTheme {
  base: string;
}

export interface FooterDividerProps extends ComponentProps<"hr"> {
  theme?: DeepPartial<FlowbiteFooterDividerTheme>;
  unstyled?: Unstyled<FlowbiteFooterDividerTheme>;
}

export const FooterDivider: FC<FooterDividerProps> = ({ className, theme: customTheme, unstyled, ...props }) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([footerTheme.divider, provider.theme?.footer?.divider, customTheme], [unstyled]);

  return <hr data-testid="footer-divider" className={twMerge(theme.base, className)} {...props} />;
};
