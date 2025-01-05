"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
import { useNavbarContext } from "./NavbarContext";
import { navbarTheme } from "./theme";

export interface NavbarCollapseTheme {
  base: string;
  list: string;
  hidden: FlowbiteBoolean;
}

export interface NavbarCollapseProps extends ComponentProps<"div">, ThemingProps<NavbarCollapseTheme> {}

export const NavbarCollapse: FC<NavbarCollapseProps> = ({
  children,
  className,
  theme: customTheme,
  resetTheme,
  applyTheme,
  ...props
}) => {
  const { theme: rootTheme, resetTheme: rootResetTheme, applyTheme: rootApplyTheme, isOpen } = useNavbarContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [navbarTheme.collapse, provider.theme?.navbar?.collapse, rootTheme?.collapse, customTheme],
    [get(provider.resetTheme, "navbar.collapse"), get(rootResetTheme, "collapse"), resetTheme],
    [get(provider.applyTheme, "navbar.collapse"), get(rootApplyTheme, "collapse"), applyTheme],
  );

  return (
    <div
      data-testid="flowbite-navbar-collapse"
      className={twMerge(theme.base, theme.hidden[!isOpen ? "on" : "off"], className)}
      {...props}
    >
      <ul className={theme.list}>{children}</ul>
    </div>
  );
};

NavbarCollapse.displayName = "NavbarCollapse";
