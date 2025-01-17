"use client";

import { forwardRef, type ComponentProps } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DynamicStringEnumKeysOf, ThemingProps } from "../../types";
import type { FlowbiteColors } from "../Flowbite/FlowbiteTheme";
import { useSidebarContext } from "./SidebarContext";
import { sidebarTheme } from "./theme";

export interface SidebarCTATheme {
  base: string;
  color: SidebarCTAColors;
}

export interface SidebarCTAProps extends Omit<ComponentProps<"div">, "color">, ThemingProps<SidebarCTATheme> {
  color?: DynamicStringEnumKeysOf<SidebarCTAColors>;
}

export interface SidebarCTAColors
  extends Pick<
    FlowbiteColors,
    "blue" | "dark" | "failure" | "gray" | "green" | "light" | "purple" | "red" | "success" | "warning" | "yellow"
  > {
  [key: string]: string;
}

export const SidebarCTA = forwardRef<HTMLDivElement, SidebarCTAProps>(
  ({ children, color = "info", className, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const {
      theme: rootTheme,
      clearTheme: rootClearTheme,
      applyTheme: rootApplyTheme,
      isCollapsed,
    } = useSidebarContext();

    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [sidebarTheme.cta, provider.theme?.sidebar?.cta, rootTheme?.cta, customTheme],
      [get(provider.clearTheme, "sidebar.cta"), get(rootClearTheme, "cta"), clearTheme],
      [get(provider.applyTheme, "sidebar.cta"), get(rootApplyTheme, "cta"), applyTheme],
    );

    return (
      <div
        ref={ref}
        data-testid="sidebar-cta"
        hidden={isCollapsed}
        className={twMerge(theme.base, theme.color[color], className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

SidebarCTA.displayName = "SidebarCTA";
