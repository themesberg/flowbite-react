"use client";

import type { FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { useThemeProvider } from "../../theme/provider";
import type { NavbarComponentProps, NavbarTheme } from "../Navbar";
import { Navbar } from "../Navbar";
import { MegaMenuDropdown, type MegaMenuDropdownTheme } from "./MegaMenuDropdown";
import { MegaMenuDropdownToggle, type MegaMenuDropdownToggleTheme } from "./MegaMenuDropdownToggle";
import { megaMenuTheme } from "./theme";

export interface MegaMenuTheme extends NavbarTheme {
  dropdown: MegaMenuDropdownTheme;
  dropdownToggle: MegaMenuDropdownToggleTheme;
}

export type MegaMenuProps = NavbarComponentProps;

const MegaMenuComponent: FC<MegaMenuProps> = ({ children, theme: customTheme, resetTheme, ...props }) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([megaMenuTheme, provider.theme?.megaMenu, customTheme], [resetTheme]);

  return (
    <Navbar theme={theme} fluid {...props}>
      {children}
    </Navbar>
  );
};

MegaMenuComponent.displayName = "MegaMenu";

export const MegaMenu = Object.assign(MegaMenuComponent, {
  Dropdown: MegaMenuDropdown,
  DropdownToggle: MegaMenuDropdownToggle,
});
