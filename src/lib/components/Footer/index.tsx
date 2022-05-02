import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { FooterBrand } from './FooterBrand';
import { FooterCopyright } from './FooterCopyright';

import { FooterLink } from './FooterLink';
import { FooterLinkGroup } from './FooterLinkGroup';
import { FooterIconContent } from './FooterIconContent';
import { FooterCol } from './FooterCol';

export type FooterComponentProps = PropsWithChildren<{
  className?: string;
}>;

const FooterComponent: FC<FooterComponentProps> = ({ children, className }) => {
  return (
    <footer
      className={classNames(
        'rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6',
        className,
      )}
    >
      {children}
    </footer>
  );
};

export const Footer = Object.assign(FooterComponent, {
  Copyright: FooterCopyright,
  Link: FooterLink,
  LinkGroup: FooterLinkGroup,
  Brand: FooterBrand,
  Col: FooterCol,
  IconContent: FooterIconContent,
});
