"use client";

import type { ComponentProps, FC } from "react";
import { useId } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
import { useSidebarContext } from "./SidebarContext";
import { sidebarTheme } from "./theme";

export interface FlowbiteSidebarLogoTheme {
  base: string;
  collapsed: FlowbiteBoolean;
  img: string;
}

export interface SidebarLogoProps extends ComponentProps<"a"> {
  href: string;
  img: string;
  imgAlt?: string;
  theme?: DeepPartial<FlowbiteSidebarLogoTheme>;
  unstyled?: Unstyled<FlowbiteSidebarLogoTheme>;
}

export const SidebarLogo: FC<SidebarLogoProps> = ({
  children,
  className,
  href,
  img,
  imgAlt = "",
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const id = useId();
  const { theme: rootTheme, unstyled: rootUnstyled, isCollapsed } = useSidebarContext();

  const theme = resolveTheme(
    [sidebarTheme.logo, getTheme()?.sidebar?.logo, rootTheme?.logo, customTheme],
    [get(rootUnstyled, "logo"), unstyled],
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
};

SidebarLogo.displayName = "Sidebar.Logo";
