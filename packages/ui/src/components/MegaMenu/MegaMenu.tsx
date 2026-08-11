"use client";

import { forwardRef, useState } from "react";
import { get } from "../../helpers/get";
import { resolveProps } from "../../helpers/resolve-props";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { useThemeProvider } from "../../theme/provider";
import type { NavbarProps, NavbarTheme } from "../Navbar";
import { Navbar } from "../Navbar";
import { MegaMenuContext } from "./MegaMenuContext";
import type { MegaMenuDropdownTheme } from "./MegaMenuDropdown";
import type { MegaMenuDropdownToggleTheme } from "./MegaMenuDropdownToggle";
import { megaMenuTheme } from "./theme";

export interface MegaMenuTheme extends NavbarTheme {
  dropdown: MegaMenuDropdownTheme;
  dropdownToggle: MegaMenuDropdownToggleTheme;
}

export type MegaMenuProps = NavbarProps;

export const MegaMenu = forwardRef<HTMLElement, MegaMenuProps>((props, ref) => {
  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [megaMenuTheme, provider.theme?.megaMenu, props.theme],
    [get(provider.clearTheme, "megaMenu"), props.clearTheme],
    [get(provider.applyTheme, "megaMenu"), props.applyTheme],
  );

  const mergedProps = resolveProps(props, provider.props?.megaMenu);

  const [openToggleId, setOpenToggleId] = useState<string | undefined>(undefined);

  return (
    <MegaMenuContext.Provider value={{ openToggleId, setOpenToggleId }}>
      <Navbar ref={ref} theme={theme} fluid {...mergedProps} />
    </MegaMenuContext.Provider>
  );
});

MegaMenu.displayName = "MegaMenu";
