"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getStore } from "../../store";
import type { DeepPartial, DynamicStringEnumKeysOf, Unstyled } from "../../types";
import type { FlowbiteColors } from "../Flowbite/FlowbiteTheme";
import { useSidebarContext } from "./SidebarContext";
import { sidebarTheme } from "./theme";

export interface FlowbiteSidebarCTATheme {
  base: string;
  color: FlowbiteSidebarCTAColors;
}

export interface SidebarCTAProps extends Omit<ComponentProps<"div">, "color"> {
  color?: DynamicStringEnumKeysOf<FlowbiteSidebarCTAColors>;
  theme?: DeepPartial<FlowbiteSidebarCTATheme>;
  unstyled?: Unstyled<FlowbiteSidebarCTATheme>;
}

export interface FlowbiteSidebarCTAColors
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
  unstyled,
  ...props
}) => {
  const { theme: rootTheme, unstyled: rootUnstyled, isCollapsed } = useSidebarContext();

  const theme = resolveTheme(
    [sidebarTheme.cta, getStore().theme?.sidebar?.cta, rootTheme?.cta, customTheme],
    [get(rootUnstyled, "cta"), unstyled],
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
