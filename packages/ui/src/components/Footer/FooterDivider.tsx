"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { footerTheme } from "./theme";

export interface FooterDividerTheme {
  base: string;
}

export interface FooterDividerProps extends ComponentProps<"hr">, ThemingProps<FooterDividerTheme> {}

export const FooterDivider: FC<FooterDividerProps> = ({
  className,
  theme: customTheme,
  resetTheme,
  applyTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [footerTheme.divider, provider.theme?.footer?.divider, customTheme],
    [get(provider.resetTheme, "footer.divider"), resetTheme],
    [get(provider.applyTheme, "footer.divider"), applyTheme],
  );

  return <hr data-testid="footer-divider" className={twMerge(theme.base, className)} {...props} />;
};
