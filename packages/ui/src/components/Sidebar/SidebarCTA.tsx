"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, DynamicStringEnumKeysOf, ResetTheme } from "../../types";
import type { FlowbiteColors } from "../Flowbite/FlowbiteTheme";
import { useSidebarContext } from "./SidebarContext";
import { sidebarTheme } from "./theme";

export interface SidebarCTATheme {
  base: string;
  color: SidebarCTAColors;
}

export interface SidebarCTAProps extends Omit<ComponentProps<"div">, "color"> {
  color?: DynamicStringEnumKeysOf<SidebarCTAColors>;
  theme?: DeepPartial<SidebarCTATheme>;
  resetTheme?: ResetTheme<SidebarCTATheme>;
}

export interface SidebarCTAColors
  extends Pick<
    FlowbiteColors,
    "blue" | "dark" | "failure" | "gray" | "green" | "light" | "purple" | "red" | "success" | "warning" | "yellow"
  > {
  [key: string]: string;
}

export const SidebarCTA: FC<SidebarCTAProps> = ({
  children,
  color = "info",
  className,
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const { theme: rootTheme, resetTheme: rootResetTheme, isCollapsed } = useSidebarContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [sidebarTheme.cta, provider.theme?.sidebar?.cta, rootTheme?.cta, customTheme],
    [get(rootResetTheme, "cta"), resetTheme],
  );

  return (
    <div
      data-testid="sidebar-cta"
      hidden={isCollapsed}
      className={twMerge(theme.base, theme.color[color], className)}
      {...props}
    >
      {children}
    </div>
  );
};

SidebarCTA.displayName = "Sidebar.CTA";
