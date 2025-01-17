"use client";

import { forwardRef, type ComponentProps } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
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

export const NavbarCollapse = forwardRef<HTMLDivElement, NavbarCollapseProps>(
  ({ children, className, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const { theme: rootTheme, clearTheme: rootClearTheme, applyTheme: rootApplyTheme, isOpen } = useNavbarContext();

    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [navbarTheme.collapse, provider.theme?.navbar?.collapse, rootTheme?.collapse, customTheme],
      [get(provider.clearTheme, "navbar.collapse"), get(rootClearTheme, "collapse"), clearTheme],
      [get(provider.applyTheme, "navbar.collapse"), get(rootApplyTheme, "collapse"), applyTheme],
    );

    return (
      <div
        ref={ref}
        data-testid="flowbite-navbar-collapse"
        className={twMerge(theme.base, theme.hidden[!isOpen ? "on" : "off"], className)}
        {...props}
      >
        <ul className={theme.list}>{children}</ul>
      </div>
    );
  },
);

NavbarCollapse.displayName = "NavbarCollapse";
