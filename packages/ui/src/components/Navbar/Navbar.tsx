"use client";

import type { ComponentProps, FC } from "react";
import { useState } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
import type { NavbarBrandTheme } from "./NavbarBrand";
import { NavbarBrand } from "./NavbarBrand";
import type { NavbarCollapseTheme } from "./NavbarCollapse";
import { NavbarCollapse } from "./NavbarCollapse";
import { NavbarContext } from "./NavbarContext";
import type { NavbarLinkTheme } from "./NavbarLink";
import { NavbarLink } from "./NavbarLink";
import type { NavbarToggleThem } from "./NavbarToggle";
import { NavbarToggle } from "./NavbarToggle";
import { navbarTheme } from "./theme";

export interface NavbarTheme {
  root: NavbarRootTheme;
  brand: NavbarBrandTheme;
  collapse: NavbarCollapseTheme;
  link: NavbarLinkTheme;
  toggle: NavbarToggleThem;
}

export interface NavbarRootTheme {
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
  theme?: DeepPartial<NavbarTheme>;
  resetTheme?: ResetTheme<NavbarTheme>;
}

const NavbarComponent: FC<NavbarComponentProps> = ({
  border,
  children,
  className,
  fluid = false,
  menuOpen,
  rounded,
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(menuOpen);

  const provider = useThemeProvider();
  const theme = resolveTheme([navbarTheme, provider.theme?.navbar, customTheme], [resetTheme]);

  return (
    <NavbarContext.Provider value={{ theme: customTheme, resetTheme, isOpen, setIsOpen }}>
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
