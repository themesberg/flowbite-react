import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { FooterBrand } from './FooterBrand';
import { FooterCopyright } from './FooterCopyright';
import { FooterLink } from './FooterLink';
import { FooterLinkGroup } from './FooterLinkGroup';
import { FooterIcon } from './FooterIcon';

import { useTheme } from '../Flowbite/ThemeContext';

export type FooterComponentProps = PropsWithChildren<{
  className?: string;
}>;

const FooterComponent: FC<FooterComponentProps> = ({ children, className }) => {
  const theme = useTheme().theme.footer;
  return (
    <footer data-testid="footer-element" className={classNames(theme.base, className)}>
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

export const Footer = Object.assign(FooterComponent, {
  Copyright: FooterCopyright,
  Link: FooterLink,
  LinkGroup: FooterLinkGroup,
  Brand: FooterBrand,
  Icon: FooterIcon,
});
