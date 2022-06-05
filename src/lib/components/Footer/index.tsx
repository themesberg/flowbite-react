import { ComponentProps, FC } from 'react';
import { FooterBrand } from './FooterBrand';
import { FooterCopyright } from './FooterCopyright';
import { FooterLink } from './FooterLink';
import { FooterLinkGroup } from './FooterLinkGroup';
import { FooterIcon } from './FooterIcon';

import { useTheme } from '../Flowbite/ThemeContext';
import { FlowbiteColors } from '../Flowbite/FlowbiteTheme';

export interface FooterColors extends Pick<FlowbiteColors, 'white'> {
  [key: string]: string;
}

export interface FooterProps extends Omit<ComponentProps<'footer'>, 'color'> {
  color?: keyof FooterColors;
}

export const FooterComponent: FC<FooterProps> = ({ children }): JSX.Element => {
  const theme = useTheme().theme.footer;

  return (
    <footer data-testid="footer-element" className={theme.base}>
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
