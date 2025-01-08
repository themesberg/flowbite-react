"use client";

import type { ComponentProps } from "react";
import { useId } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
import { useSidebarContext } from "./SidebarContext";
import { sidebarTheme } from "./theme";

export interface SidebarLogoTheme {
  base: string;
  collapsed: FlowbiteBoolean;
  img: string;
}

export interface SidebarLogoProps extends ComponentProps<"a">, ThemingProps<SidebarLogoTheme> {
  href: string;
  img: string;
  imgAlt?: string;
}

export function SidebarLogo({
  children,
  className,
  href,
  img,
  imgAlt = "",
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: SidebarLogoProps) {
  const id = useId();
  const { theme: rootTheme, clearTheme: rootClearTheme, applyTheme: rootApplyTheme, isCollapsed } = useSidebarContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [sidebarTheme.logo, provider.theme?.sidebar?.logo, rootTheme?.logo, customTheme],
    [get(provider.clearTheme, "sidebar.logo"), get(rootClearTheme, "logo"), clearTheme],
    [get(provider.applyTheme, "sidebar.logo"), get(rootApplyTheme, "logo"), applyTheme],
  );

  return (
    <a
      aria-labelledby={`flowbite-sidebar-logo-${id}`}
      href={href}
      className={twMerge(theme.base, className)}
      {...props}
    >
      <img alt={imgAlt} src={img} className={theme.img} />
      <span className={theme.collapsed[isCollapsed ? "on" : "off"]} id={`flowbite-sidebar-logo-${id}`}>
        {children}
      </span>
    </a>
  );
}

SidebarLogo.displayName = "SidebarLogo";
