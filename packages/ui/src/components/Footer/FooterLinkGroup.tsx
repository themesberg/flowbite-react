import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
import type { DeepPartial } from "../../types";
import type { FlowbiteFooterLinkTheme } from "./FooterLink";
import { footerTheme } from "./theme";

export interface FlowbiteFooterLinkGroupTheme {
  base: string;
  link: FlowbiteFooterLinkTheme;
  col: string;
}

export interface FooterLinkGroupProps extends ComponentProps<"ul"> {
  col?: boolean;
  theme?: DeepPartial<FlowbiteFooterLinkGroupTheme>;
}

export const FooterLinkGroup: FC<FooterLinkGroupProps> = ({
  children,
  className,
  col = false,
  theme: customTheme,
  ...props
}) => {
  const theme = resolveTheme([footerTheme.groupLink, getTheme()?.footer?.groupLink, customTheme]);

  return (
    <ul data-testid="footer-groupLink" className={twMerge(theme.base, col && theme.col, className)} {...props}>
      {children}
    </ul>
  );
};
