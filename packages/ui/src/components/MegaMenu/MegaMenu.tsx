"use client";

import type { FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { useThemeProvider } from "../../theme/provider";
import type { NavbarProps, NavbarTheme } from "../Navbar";
import { Navbar } from "../Navbar";
import { type MegaMenuDropdownTheme } from "./MegaMenuDropdown";
import { type MegaMenuDropdownToggleTheme } from "./MegaMenuDropdownToggle";
import { megaMenuTheme } from "./theme";

export interface MegaMenuTheme extends NavbarTheme {
  dropdown: MegaMenuDropdownTheme;
  dropdownToggle: MegaMenuDropdownToggleTheme;
}

export type MegaMenuProps = NavbarProps;

export const MegaMenu: FC<MegaMenuProps> = ({ children, theme: customTheme, resetTheme, applyTheme, ...props }) => {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [megaMenuTheme, provider.theme?.megaMenu, customTheme],
    [get(provider.resetTheme, "megaMenu"), resetTheme],
    [get(provider.applyTheme, "megaMenu"), applyTheme],
  );

  return (
    <Navbar theme={theme} fluid {...props}>
      {children}
    </Navbar>
  );
};

MegaMenu.displayName = "MegaMenu";
