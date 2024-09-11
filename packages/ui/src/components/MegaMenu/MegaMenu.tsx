"use client";

import type { FC } from "react";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { FlowbiteNavbarTheme, NavbarComponentProps } from "../Navbar";
import { Navbar } from "../Navbar";
import { FlowbiteMegaMenuDropdownTheme, MegaMenuDropdown } from "./MegaMenuDropdown";
import { FlowbiteMegaMenuDropdownToggleTheme, MegaMenuDropdownToggle } from "./MegaMenuDropdownToggle";

export interface FlowbiteMegaMenuTheme extends FlowbiteNavbarTheme {
  dropdown: FlowbiteMegaMenuDropdownTheme;
  dropdownToggle: FlowbiteMegaMenuDropdownToggleTheme;
}

export type MegaMenuProps = NavbarComponentProps;

const MegaMenuComponent: FC<MegaMenuProps> = ({ children, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().megaMenu, customTheme);

  return (
    <Navbar fluid theme={theme} {...props}>
      {children}
    </Navbar>
  );
};

export const MegaMenu = Object.assign(MegaMenuComponent, {
  Dropdown: MegaMenuDropdown,
  DropdownToggle: MegaMenuDropdownToggle,
});
MegaMenuComponent.displayName = "MegaMenu";
