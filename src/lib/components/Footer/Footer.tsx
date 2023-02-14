import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';
import { FlowbiteFooterBrandTheme, FooterBrand } from './FooterBrand';
import { FlowbiteFooterCopyrightTheme, FooterCopyright } from './FooterCopyright';
import { FlowbiteFooterDividerTheme, FooterDivider } from './FooterDivider';
import { FlowbiteFooterIconTheme, FooterIcon } from './FooterIcon';
import { FooterLink } from './FooterLink';
import { FlowbiteFooterLinkGroupTheme, FooterLinkGroup } from './FooterLinkGroup';
import { FlowbiteFooterTitleTheme, FooterTitle } from './FooterTitle';

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
}): JSX.Element => {
  const theme = mergeDeep(useTheme().theme.footer, customTheme);

  return (
    <footer
      data-testid="flowbite-footer"
      className={classNames(theme.root.base, bgDark && theme.root.bgDark, container && theme.root.container, className)}
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
