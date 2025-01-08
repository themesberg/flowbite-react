"use client";

import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { useThemeProvider } from "../../theme/provider";
import type { NavbarProps, NavbarTheme } from "../Navbar";
import { Navbar } from "../Navbar";
import type { MegaMenuDropdownTheme } from "./MegaMenuDropdown";
import type { MegaMenuDropdownToggleTheme } from "./MegaMenuDropdownToggle";
import { megaMenuTheme } from "./theme";

export interface MegaMenuTheme extends NavbarTheme {
  dropdown: MegaMenuDropdownTheme;
  dropdownToggle: MegaMenuDropdownToggleTheme;
}

export type MegaMenuProps = NavbarProps;

export function MegaMenu({ children, theme: customTheme, clearTheme, applyTheme, ...props }: MegaMenuProps) {
  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [megaMenuTheme, provider.theme?.megaMenu, customTheme],
    [get(provider.clearTheme, "megaMenu"), clearTheme],
    [get(provider.applyTheme, "megaMenu"), applyTheme],
  );

  return (
    <Navbar theme={theme} fluid {...props}>
      {children}
    </Navbar>
  );
}

MegaMenu.displayName = "MegaMenu";
