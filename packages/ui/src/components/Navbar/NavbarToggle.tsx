"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { BarsIcon } from "../../icons";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { useNavbarContext } from "./NavbarContext";
import { navbarTheme } from "./theme";

export interface NavbarToggleThem {
  base: string;
  icon: string;
}

export interface NavbarToggleProps extends ComponentProps<"button">, ThemingProps<NavbarToggleThem> {
  barIcon?: FC<ComponentProps<"svg">>;
}

export const NavbarToggle: FC<NavbarToggleProps> = ({
  barIcon: BarIcon = BarsIcon,
  className,
  theme: customTheme,
  resetTheme,
  applyTheme,
  ...props
}) => {
  const {
    theme: rootTheme,
    resetTheme: rootResetTheme,
    applyTheme: rootApplyTheme,
    isOpen,
    setIsOpen,
  } = useNavbarContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [navbarTheme.toggle, provider.theme?.navbar?.toggle, rootTheme?.toggle, customTheme],
    [get(provider.resetTheme, "navbar.toggle"), get(rootResetTheme, "toggle"), resetTheme],
    [get(provider.applyTheme, "navbar.toggle"), get(rootApplyTheme, "toggle"), applyTheme],
  );

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <button
      data-testid="flowbite-navbar-toggle"
      onClick={handleClick}
      className={twMerge(theme.base, className)}
      {...props}
    >
      <span className="sr-only">Open main menu</span>
      <BarIcon aria-hidden className={theme.icon} />
    </button>
  );
};
