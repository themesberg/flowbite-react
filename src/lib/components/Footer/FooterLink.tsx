import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FooterLinkProps extends Omit<PropsWithChildren<ComponentProps<'a'>>, 'className'> {
  href: string;
}

export const FooterLink: FC<FooterLinkProps> = ({ children, href }) => {
  const theme = useTheme().theme.footer.groupLink.link;

  return (
    <li className={theme.base}>
      <a href={href} className={theme.href}>
        {children}
      </a>
    </li>
  );
};
