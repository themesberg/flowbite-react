"use client";

import type { ComponentProps, FC } from "react";
import { useId } from "react";
import { twMerge } from "tailwind-merge";
import { resolveTheme } from "../../helpers/resolve-theme";
import type { DeepPartial } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
import { useSidebarContext } from "./SidebarContext";

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
}

export const SidebarLogo: FC<SidebarLogoProps> = ({
  children,
  className,
  href,
  img,
  imgAlt = "",
  theme: customTheme,
  ...props
}) => {
  const id = useId();
  const { theme: rootTheme, isCollapsed } = useSidebarContext();

  const theme = resolveTheme([rootTheme.logo, customTheme], { shouldPrefix: false });

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
