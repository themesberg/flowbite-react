import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';
import { FooterBrand } from './FooterBrand';
import { FooterCopyright } from './FooterCopyright';
import { FooterDivider } from './FooterDivider';
import { FooterIcon } from './FooterIcon';
import { FooterLink } from './FooterLink';
import { FooterLinkGroup } from './FooterLinkGroup';
import { FooterTitle } from './FooterTitle';

export interface FlowbiteFooterTheme {
  base: string;
  container: string;
  bgDark: string;
  groupLink: {
    base: string;
    link: {
      base: string;
      href: string;
    };
    col: string;
  };
  icon: {
    base: string;
    size: string;
  };
  title: {
    base: string;
  };
  divider: {
    base: string;
  };
  copyright: {
    base: string;
    href: string;
    span: string;
  };
  brand: {
    base: string;
    img: string;
    span: string;
  };
}

export interface FooterProps extends ComponentProps<'footer'> {
  bgDark?: boolean;
  container?: boolean;
}

export const FooterComponent: FC<FooterProps> = ({
  children,
  className,
  bgDark = false,
  container = false,
}): JSX.Element => {
  const theme = useTheme().theme.footer;
  return (
    <footer
      data-testid="flowbite-footer"
      className={classNames(theme.base, bgDark && theme.bgDark, container && theme.container, className)}
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
