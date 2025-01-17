"use client";

import { forwardRef, type ComponentProps, type ElementType } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { footerTheme } from "./theme";

export interface FooterTitleTheme {
  base: string;
}

export interface FooterTitleProps extends ComponentProps<"h2">, ThemingProps<FooterTitleTheme> {
  as?: ElementType;
  title: string;
}

export const FooterTitle = forwardRef<HTMLHeadElement, FooterTitleProps>(
  ({ as: Component = "h2", className, title, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [footerTheme.title, provider.theme?.footer?.title, customTheme],
      [get(provider.clearTheme, "footer.title"), clearTheme],
      [get(provider.applyTheme, "footer.title"), applyTheme],
    );

    return (
      <Component ref={ref} data-testid="flowbite-footer-title" className={twMerge(theme.base, className)} {...props}>
        {title}
      </Component>
    );
  },
);

FooterTitle.displayName = "FooterTitle";
