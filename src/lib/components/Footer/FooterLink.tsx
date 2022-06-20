import type { FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export type FooterLinkProps = PropsWithChildren<{
  href: string;
}>;

export const FooterLink: FC<FooterLinkProps> = ({ href, children }) => {
  const theme = useTheme().theme.footer.groupLink.link;
  return (
    <li className={theme.base}>
      <a href={href} className={theme.href}>
        {children}
      </a>
    </li>
  );
};
