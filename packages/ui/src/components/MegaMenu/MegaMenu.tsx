"use client";

import type { FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { useThemeProvider } from "../../theme/provider";
import type { FlowbiteNavbarTheme, NavbarComponentProps } from "../Navbar";
import { Navbar } from "../Navbar";
import { FlowbiteMegaMenuDropdownTheme, MegaMenuDropdown } from "./MegaMenuDropdown";
import { FlowbiteMegaMenuDropdownToggleTheme, MegaMenuDropdownToggle } from "./MegaMenuDropdownToggle";
import { megaMenuTheme } from "./theme";

export interface FlowbiteMegaMenuTheme extends FlowbiteNavbarTheme {
  dropdown: FlowbiteMegaMenuDropdownTheme;
  dropdownToggle: FlowbiteMegaMenuDropdownToggleTheme;
}

export type MegaMenuProps = NavbarComponentProps;

const MegaMenuComponent: FC<MegaMenuProps> = ({ children, theme: customTheme, ...props }) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([megaMenuTheme, provider.theme?.megaMenu, customTheme]);

  return (
    <Navbar theme={theme} fluid {...props}>
      {children}
    </Navbar>
  );
};

export const MegaMenu = Object.assign(MegaMenuComponent, {
  Dropdown: MegaMenuDropdown,
  DropdownToggle: MegaMenuDropdownToggle,
});
MegaMenuComponent.displayName = "MegaMenu";
