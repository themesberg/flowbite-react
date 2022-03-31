import { FC, useState } from 'react';
import classNames from 'classnames';
import { NavbarBrand } from './NavbarBrand';
import { NavbarCollapse } from './NavbarCollapse';
import { NavbarContext } from './NavbarContext';
import { NavbarToggle } from './NavbarToggle';

export type NavbarCompnentProps = {
  menuOpen?: boolean;
  fluid?: boolean;
};

const NavbarCompnent: FC<NavbarCompnentProps> = ({ children, menuOpen, fluid }) => {
  const [isOpen, setIsOpen] = useState(menuOpen);

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-800 sm:px-4">
        <div
          className={classNames('mx-auto flex flex-wrap items-center justify-between', {
            container: fluid,
          })}
        >
          {children}
        </div>
      </nav>
    </NavbarContext.Provider>
  );
};

NavbarCompnent.displayName = 'Navbar';
NavbarBrand.displayName = 'Navbar.Brand';
NavbarToggle.displayName = 'Navbar.Toggle';
NavbarCollapse.displayName = 'Navbar.Collapse';

export const Navbar = Object.assign(NavbarCompnent, {
  Brand: NavbarBrand,
  Toggle: NavbarToggle,
  Collapse: NavbarCollapse,
});
