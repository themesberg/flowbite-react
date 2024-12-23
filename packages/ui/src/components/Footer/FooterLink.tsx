"use client";

import type { ComponentProps, ElementType, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial } from "../../types";
import { footerTheme } from "./theme";

export interface FlowbiteFooterLinkTheme {
  base: string;
  href: string;
}

export interface FooterLinkProps extends ComponentProps<"a"> {
  as?: ElementType;
  href: string;
  theme?: DeepPartial<FlowbiteFooterLinkTheme>;
}

export const FooterLink: FC<FooterLinkProps> = ({
  as: Component = "a",
  children,
  className,
  href,
  theme: customTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([footerTheme.groupLink.link, provider.theme?.footer?.groupLink?.link, customTheme]);

  return (
    <li className={twMerge(theme.base, className)}>
      <Component href={href} className={theme.href} {...props}>
        {children}
      </Component>
    </li>
  );
};
