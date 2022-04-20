import { Children, FC, PropsWithChildren } from 'react';
import { FooterCopyright } from './FooterCopyright';

import { FooterLink } from './FooterLink';
import { FooterLinkBox } from './FooterLinkBox';

export type FooterComponentProps = PropsWithChildren<{}>;

const FooterComponent: FC<FooterComponentProps> = ({ children }) => {
  return (
    <footer className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6">
      {children}
    </footer>
  );
};

export const Footer = Object.assign(FooterComponent, {
  Copyright: FooterCopyright,
  Link: FooterLink,
  LinkBox: FooterLinkBox,
});
