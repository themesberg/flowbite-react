"use client";

import type { ComponentProps, FC } from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite";
import type { FlowbiteNavbarBrandTheme } from "./NavbarBrand";
import { NavbarBrand } from "./NavbarBrand";
import type { FlowbiteNavbarCollapseTheme } from "./NavbarCollapse";
import { NavbarCollapse } from "./NavbarCollapse";
import { NavbarContext } from "./NavbarContext";
import type { FlowbiteNavbarLinkTheme } from "./NavbarLink";
import { NavbarLink } from "./NavbarLink";
import type { FlowbiteNavbarToggleTheme } from "./NavbarToggle";
import { NavbarToggle } from "./NavbarToggle";

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

export interface NavbarComponentProps extends ComponentProps<"nav"> {
  menuOpen?: boolean;
  fluid?: boolean;
  rounded?: boolean;
  border?: boolean;
  theme?: DeepPartial<FlowbiteNavbarTheme>;
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

  const theme = mergeDeep(getTheme().navbar, customTheme);

  return (
    <NavbarContext.Provider value={{ theme, isOpen, setIsOpen }}>
      <nav
        className={twMerge(
          theme.root.base,
          theme.root.bordered[border ? "on" : "off"],
          theme.root.rounded[rounded ? "on" : "off"],
          className,
        )}
        {...props}
      >
        <div className={twMerge(theme.root.inner.base, theme.root.inner.fluid[fluid ? "on" : "off"])}>{children}</div>
      </nav>
    </NavbarContext.Provider>
  );
};

NavbarComponent.displayName = "Navbar";
NavbarBrand.displayName = "Navbar.Brand";
NavbarCollapse.displayName = "Navbar.Collapse";
NavbarLink.displayName = "Navbar.Link";
NavbarToggle.displayName = "Navbar.Toggle";

export const Navbar = Object.assign(NavbarComponent, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Link: NavbarLink,
  Toggle: NavbarToggle,
});
