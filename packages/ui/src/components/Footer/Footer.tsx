"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import type { FooterBrandTheme } from "./FooterBrand";
import { FooterBrand } from "./FooterBrand";
import type { FooterCopyrightTheme } from "./FooterCopyright";
import { FooterCopyright } from "./FooterCopyright";
import type { FooterDividerTheme } from "./FooterDivider";
import { FooterDivider } from "./FooterDivider";
import type { FooterIconTheme } from "./FooterIcon";
import { FooterIcon } from "./FooterIcon";
import { FooterLink } from "./FooterLink";
import type { FooterLinkGroupTheme } from "./FooterLinkGroup";
import { FooterLinkGroup } from "./FooterLinkGroup";
import type { FooterTitleTheme } from "./FooterTitle";
import { FooterTitle } from "./FooterTitle";
import { footerTheme } from "./theme";

export interface FooterTheme {
  brand: FooterBrandTheme;
  copyright: FooterCopyrightTheme;
  divider: FooterDividerTheme;
  groupLink: FooterLinkGroupTheme;
  icon: FooterIconTheme;
  root: FooterRootTheme;
  title: FooterTitleTheme;
}

export interface FooterRootTheme {
  base: string;
  bgDark: string;
  container: string;
}

export interface FooterProps extends ComponentProps<"footer"> {
  bgDark?: boolean;
  container?: boolean;
  theme?: DeepPartial<FooterTheme>;
  resetTheme?: ResetTheme<FooterTheme>;
}

export const FooterComponent: FC<FooterProps> = ({
  bgDark = false,
  children,
  className,
  container = false,
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([footerTheme, provider.theme?.footer, customTheme], [resetTheme]);

  return (
    <footer
      data-testid="flowbite-footer"
      className={twMerge(theme.root.base, bgDark && theme.root.bgDark, container && theme.root.container, className)}
      {...props}
    >
      {children}
    </footer>
  );
};

FooterComponent.displayName = "Footer";
FooterCopyright.displayName = "Footer.Copyright";
FooterLink.displayName = "Footer.Link";
FooterBrand.displayName = "Footer.Brand";
FooterLinkGroup.displayName = "Footer.LinkGroup";
FooterIcon.displayName = "Footer.Icon";
FooterTitle.displayName = "Footer.Title";
FooterDivider.displayName = "Footer.Divider";

export const Footer = Object.assign(FooterComponent, {
  Copyright: FooterCopyright,
  Link: FooterLink,
  LinkGroup: FooterLinkGroup,
  Brand: FooterBrand,
  Icon: FooterIcon,
  Title: FooterTitle,
  Divider: FooterDivider,
});
