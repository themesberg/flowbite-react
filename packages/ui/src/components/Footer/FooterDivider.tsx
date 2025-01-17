"use client";

import { forwardRef, type ComponentProps } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { footerTheme } from "./theme";

export interface FooterDividerTheme {
  base: string;
}

export interface FooterDividerProps extends ComponentProps<"hr">, ThemingProps<FooterDividerTheme> {}

export const FooterDivider = forwardRef<HTMLHRElement, FooterDividerProps>(
  ({ className, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [footerTheme.divider, provider.theme?.footer?.divider, customTheme],
      [get(provider.clearTheme, "footer.divider"), clearTheme],
      [get(provider.applyTheme, "footer.divider"), applyTheme],
    );

    return <hr ref={ref} data-testid="footer-divider" className={twMerge(theme.base, className)} {...props} />;
  },
);

FooterDivider.displayName = "FooterDivider";
