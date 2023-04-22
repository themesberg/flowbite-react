import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';
import type { FlowbiteFooterBrandTheme } from './FooterBrand';
import { FooterBrand } from './FooterBrand';
import type { FlowbiteFooterCopyrightTheme } from './FooterCopyright';
import { FooterCopyright } from './FooterCopyright';
import type { FlowbiteFooterDividerTheme } from './FooterDivider';
import { FooterDivider } from './FooterDivider';
import type { FlowbiteFooterIconTheme } from './FooterIcon';
import { FooterIcon } from './FooterIcon';
import { FooterLink } from './FooterLink';
import type { FlowbiteFooterLinkGroupTheme } from './FooterLinkGroup';
import { FooterLinkGroup } from './FooterLinkGroup';
import type { FlowbiteFooterTitleTheme } from './FooterTitle';
import { FooterTitle } from './FooterTitle';

export interface FlowbiteFooterTheme {
  brand: FlowbiteFooterBrandTheme;
  copyright: FlowbiteFooterCopyrightTheme;
  divider: FlowbiteFooterDividerTheme;
  groupLink: FlowbiteFooterLinkGroupTheme;
  icon: FlowbiteFooterIconTheme;
  root: FlowbiteFooterRootTheme;
  title: FlowbiteFooterTitleTheme;
}

export interface FlowbiteFooterRootTheme {
  base: string;
  bgDark: string;
  container: string;
}

export interface FooterProps extends ComponentProps<'footer'> {
  bgDark?: boolean;
  container?: boolean;
  theme?: DeepPartial<FlowbiteFooterTheme>;
}

export const FooterComponent: FC<FooterProps> = ({
  bgDark = false,
  children,
  className,
  container = false,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.footer, customTheme);

  return (
    <footer
      data-testid="flowbite-footer"
      className={classNames(theme.root.base, bgDark && theme.root.bgDark, container && theme.root.container, className)}
      {...props}
    >
      {children}
    </footer>
  );
};

FooterComponent.displayName = 'Footer';
FooterCopyright.displayName = 'Footer.Copyright';
FooterLink.displayName = 'Footer.Link';
FooterBrand.displayName = 'Footer.Brand';
FooterLinkGroup.displayName = 'Footer.LinkGroup';
FooterIcon.displayName = 'Footer.Icon';
FooterTitle.displayName = 'Footer.Title';
FooterDivider.displayName = 'Footer.Divider';

export const Footer = Object.assign(FooterComponent, {
  Copyright: FooterCopyright,
  Link: FooterLink,
  LinkGroup: FooterLinkGroup,
  Brand: FooterBrand,
  Icon: FooterIcon,
  Title: FooterTitle,
  Divider: FooterDivider,
});
