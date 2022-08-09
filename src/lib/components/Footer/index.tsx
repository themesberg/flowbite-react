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

export interface FooterProps extends Omit<ComponentProps<'footer'>, 'className'> {
  bgDark?: boolean;
  container?: boolean;
}

export const FooterComponent: FC<FooterProps> = ({ children, bgDark = false, container = false }): JSX.Element => {
  const theme = useTheme().theme.footer;
  return (
    <footer
      data-testid="flowbite-footer"
      className={classNames(theme.base, bgDark && theme.bgDark, container && theme.container)}
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
