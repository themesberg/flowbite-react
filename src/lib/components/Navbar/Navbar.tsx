import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useState } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { FlowbiteBoolean } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import type { FlowbiteNavbarBrandTheme } from './NavbarBrand';
import { NavbarBrand } from './NavbarBrand';
import type { FlowbiteNavbarCollapseTheme } from './NavbarCollapse';
import { NavbarCollapse } from './NavbarCollapse';
import { NavbarContext } from './NavbarContext';
import type { FlowbiteNavbarLinkTheme } from './NavbarLink';
import { NavbarLink } from './NavbarLink';
import type { FlowbiteNavbarToggleTheme } from './NavbarToggle';
import { NavbarToggle } from './NavbarToggle';

export interface FlowbiteNavbarTheme {
  root: FlowbiteNavbarRootTheme;
  brand: FlowbiteNavbarBrandTheme;
  collapse: FlowbiteNavbarCollapseTheme;
  link: FlowbiteNavbarLinkTheme;
  toggle: FlowbiteNavbarToggleTheme;
}

export interface FlowbiteNavbarRootTheme {
  base: string;
  rounded: FlowbiteBoolean;
  bordered: FlowbiteBoolean;
  inner: {
    base: string;
    fluid: FlowbiteBoolean;
  };
}

export interface NavbarComponentProps extends PropsWithChildren, ComponentProps<'nav'> {
  menuOpen?: boolean;
  fluid?: boolean;
  rounded?: boolean;
  border?: boolean;
  theme?: DeepPartial<FlowbiteNavbarRootTheme>;
}

const NavbarComponent: FC<NavbarComponentProps> = ({
  border,
  children,
  className,
  fluid = false,
  menuOpen,
  rounded,
  theme: customTheme = {},
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(menuOpen);

  const theme = mergeDeep(useTheme().theme.navbar.root, customTheme);

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      <nav
        className={classNames(
          theme.base,
          theme.bordered[border ? 'on' : 'off'],
          theme.rounded[rounded ? 'on' : 'off'],
          className,
        )}
        {...props}
      >
        <div className={classNames(theme.inner.base, theme.inner.fluid[fluid ? 'on' : 'off'])}>{children}</div>
      </nav>
    </NavbarContext.Provider>
  );
};

NavbarComponent.displayName = 'Navbar';
NavbarBrand.displayName = 'Navbar.Brand';
NavbarCollapse.displayName = 'Navbar.Collapse';
NavbarLink.displayName = 'Navbar.Link';
NavbarToggle.displayName = 'Navbar.Toggle';

export const Navbar = Object.assign(NavbarComponent, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Link: NavbarLink,
  Toggle: NavbarToggle,
});
