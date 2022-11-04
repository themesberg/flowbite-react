import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FooterLinkProps extends PropsWithChildren<ComponentProps<'a'>> {
  href: string;
}

export const FooterLink: FC<FooterLinkProps> = ({ children, className, href }) => {
  const theme = useTheme().theme.footer.groupLink.link;

  return (
    <li className={classNames(theme.base, className)}>
      <a href={href} className={theme.href}>
        {children}
      </a>
    </li>
  );
};
