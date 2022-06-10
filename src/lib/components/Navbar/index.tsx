import classNames from 'classnames';
import type { FC, PropsWithChildren } from 'react';
import { useState } from 'react';
import { NavbarBrand } from './NavbarBrand';
import { NavbarCollapse } from './NavbarCollapse';
import { NavbarContext } from './NavbarContext';
import { NavbarLink } from './NavbarLink';
import { NavbarToggle } from './NavbarToggle';

export type NavbarComponentProps = PropsWithChildren<{
  className?: string;
  menuOpen?: boolean;
  fluid?: boolean;
  rounded?: boolean;
  border?: boolean;
}>;

const NavbarComponent: FC<NavbarComponentProps> = ({ children, className, menuOpen, fluid, rounded, border }) => {
  const [isOpen, setIsOpen] = useState(menuOpen);

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      <nav
        className={classNames(
          className,
          'border-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4',
          {
            rounded: rounded,
            border: border,
          },
        )}
      >
        <div
          className={classNames('mx-auto flex flex-wrap items-center justify-between', {
            container: !fluid,
          })}
        >
          {children}
        </div>
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
