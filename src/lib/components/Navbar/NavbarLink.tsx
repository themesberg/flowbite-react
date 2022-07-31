import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';

export interface NavbarLinkProps extends Omit<PropsWithChildren<ComponentProps<'a'>>, 'className'> {
  active?: boolean;
  disabled?: boolean;
  href?: string;
}

export const NavbarLink: FC<NavbarLinkProps> = ({ active, disabled, href, children, ...props }) => {
  const theme = useTheme().theme.navbar.link;
  const theirProps = excludeClassName(props);

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
        )}
        {...theirProps}
      >
        {children}
      </a>
    </li>
  );
};
