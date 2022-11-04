import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';
import { useNavbarContext } from './NavbarContext';

export type NavbarCollapseProps = PropsWithChildren<ComponentProps<'div'>>;

export const NavbarCollapse: FC<NavbarCollapseProps> = ({ children, className, ...props }): JSX.Element => {
  const { isOpen } = useNavbarContext();

  const theme = useTheme().theme.navbar.collapse;

  return (
    <div
      className={classNames(theme.base, theme.hidden[!isOpen ? 'on' : 'off'], className)}
      data-testid="flowbite-navbar-collapse"
      {...props}
    >
      <ul className={theme.list}>{children}</ul>
    </div>
  );
};
