"use client";

import type { ComponentProps, ElementType, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
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

export const FooterLink: FC<FooterLinkProps> = ({
  as: Component = "a",
  children,
  className,
  href,
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [footerTheme.groupLink.link, provider.theme?.footer?.groupLink?.link, customTheme],
    [resetTheme],
  );

  return (
    <li className={twMerge(theme.base, className)}>
      <Component href={href} className={theme.href} {...props}>
        {children}
      </Component>
    </li>
  );
};
