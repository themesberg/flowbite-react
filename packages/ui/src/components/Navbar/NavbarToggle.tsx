"use client";

import type { ComponentProps, FC } from "react";
import { FaBars } from "react-icons/fa";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, Unstyled } from "../../types";
import { useNavbarContext } from "./NavbarContext";
import { navbarTheme } from "./theme";

export interface FlowbiteNavbarToggleTheme {
  base: string;
  icon: string;
}

export interface NavbarToggleProps extends ComponentProps<"button"> {
  barIcon?: FC<ComponentProps<"svg">>;
  theme?: DeepPartial<FlowbiteNavbarToggleTheme>;
  unstyled?: Unstyled<FlowbiteNavbarToggleTheme>;
}

export const NavbarToggle: FC<NavbarToggleProps> = ({
  barIcon: BarIcon = FaBars,
  className,
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const { theme: rootTheme, unstyled: rootUnstyled, isOpen, setIsOpen } = useNavbarContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [navbarTheme.toggle, provider.theme?.navbar?.toggle, rootTheme?.toggle, customTheme],
    [get(rootUnstyled, "toggle"), unstyled],
  );

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

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
