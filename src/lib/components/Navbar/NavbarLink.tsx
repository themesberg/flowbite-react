import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export interface NavbarLinkProps extends PropsWithChildren<ComponentProps<'a'>> {
  active?: boolean;
  disabled?: boolean;
  href?: string;
}

export const NavbarLink: FC<NavbarLinkProps> = ({ active, disabled, href, children, className, ...props }) => {
  const theme = useTheme().theme.navbar.link;

  return (
    <li>
      <a
        href={href}
        className={classNames(
          theme.base,
          {
            [theme.active.on]: active,
            [theme.active.off]: !active && !disabled,
          },
          theme.disabled[disabled ? 'on' : 'off'],
          className,
        )}
        {...props}
      >
        {children}
      </a>
    </li>
  );
};
