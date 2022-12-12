import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useState } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { FlowbiteBoolean } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import { FlowbiteNavbarBrandTheme, NavbarBrand } from './NavbarBrand';
import { FlowbiteNavbarCollapseTheme, NavbarCollapse } from './NavbarCollapse';
import { NavbarContext } from './NavbarContext';
import { FlowbiteNavbarLinkTheme, NavbarLink } from './NavbarLink';
import { FlowbiteNavbarToggleTheme, NavbarToggle } from './NavbarToggle';

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

export interface NavbarComponentProps extends PropsWithChildren<ComponentProps<'nav'>> {
  menuOpen?: boolean;
  fluid?: boolean;
  rounded?: boolean;
  border?: boolean;
  theme?: DeepPartial<FlowbiteNavbarRootTheme>;
}

const NavbarComponent: FC<NavbarComponentProps> = ({
  children,
  menuOpen,
  fluid = false,
  rounded,
  border,
  className,
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
