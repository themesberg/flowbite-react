import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { useNavbarContext } from './NavbarContext';

export type NavbarCollapseProps = Omit<PropsWithChildren<ComponentProps<'div'>>, 'className'>;

export const NavbarCollapse: FC<NavbarCollapseProps> = ({ children, ...props }): JSX.Element => {
  const { isOpen } = useNavbarContext();

  const theme = useTheme().theme.navbar.collapse;
  const theirProps = excludeClassName(props);

  return (
    <div
      className={classNames(theme.base, theme.hidden[!isOpen ? 'on' : 'off'])}
      data-testid="flowbite-navbar-collapse"
      {...theirProps}
    >
      <ul className={theme.list}>{children}</ul>
    </div>
  );
};
