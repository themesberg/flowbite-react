"use client";

import { forwardRef, type ComponentProps, type ElementType } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { footerTheme } from "./theme";

export interface FooterLinkTheme {
  base: string;
  href: string;
}

export interface FooterLinkProps extends ComponentProps<"a">, ThemingProps<FooterLinkTheme> {
  as?: ElementType;
  href: string;
}

export const FooterLink = forwardRef<HTMLLIElement, FooterLinkProps>(
  ({ as: Component = "a", children, className, href, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [footerTheme.groupLink.link, provider.theme?.footer?.groupLink?.link, customTheme],
      [get(provider.clearTheme, "footer.groupLink.link"), clearTheme],
      [get(provider.applyTheme, "footer.groupLink.link"), applyTheme],
    );

    return (
      <li ref={ref} className={twMerge(theme.base, className)}>
        <Component href={href} className={theme.href} {...props}>
          {children}
        </Component>
      </li>
    );
  },
);

FooterLink.displayName = "FooterLink";
