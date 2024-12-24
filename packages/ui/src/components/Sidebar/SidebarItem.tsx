"use client";

import type { ComponentProps, ElementType, FC, PropsWithChildren, ReactNode } from "react";
import { forwardRef, useId } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, DynamicStringEnumKeysOf, ResetTheme } from "../../types";
import { Badge } from "../Badge";
import type { FlowbiteColors } from "../Flowbite/FlowbiteTheme";
import { Tooltip } from "../Tooltip";
import { useSidebarContext } from "./SidebarContext";
import { useSidebarItemContext } from "./SidebarItemContext";
import { sidebarTheme } from "./theme";

export interface SidebarItemTheme {
  active: string;
  base: string;
  collapsed: {
    insideCollapse: string;
    noIcon: string;
  };
  content: {
    base: string;
  };
  icon: {
    base: string;
    active: string;
  };
  label: string;
  listItem: string;
}

export interface SidebarItemProps extends Omit<ComponentProps<"div">, "ref">, Record<string, unknown> {
  active?: boolean;
  as?: ElementType;
  href?: string;
  icon?: FC<ComponentProps<"svg">>;
  label?: string;
  labelColor?: DynamicStringEnumKeysOf<SidebarItemLabelColors>;
  theme?: DeepPartial<SidebarItemTheme>;
  resetTheme?: ResetTheme<SidebarItemTheme>;
}

export interface SidebarItemLabelColors extends Pick<FlowbiteColors, "gray"> {
  [key: string]: string;
}

const ListItem: FC<
  PropsWithChildren<{
    id: string;
    theme: SidebarItemTheme;
    isCollapsed: boolean;
    tooltipChildren: ReactNode | undefined;
    className?: string;
  }>
> = ({ id, theme, isCollapsed, tooltipChildren, children: wrapperChildren, ...props }) => (
  <li {...props}>
    {isCollapsed ? (
      <Tooltip
        content={
          <Children id={id} theme={theme}>
            {tooltipChildren}
          </Children>
        }
        placement="right"
      >
        {wrapperChildren}
      </Tooltip>
    ) : (
      wrapperChildren
    )}
  </li>
);

const Children: FC<PropsWithChildren<{ id: string; theme: SidebarItemTheme }>> = ({ id, theme, children }) => {
  return (
    <span
      data-testid="flowbite-sidebar-item-content"
      id={`flowbite-sidebar-item-${id}`}
      className={twMerge(theme.content.base)}
    >
      {children}
    </span>
  );
};

export const SidebarItem = forwardRef<Element, SidebarItemProps>(
  (
    {
      active: isActive,
      as: Component = "a",
      children,
      className,
      icon: Icon,
      label,
      labelColor = "info",
      theme: customTheme,
      resetTheme,
      ...props
    },
    ref,
  ) => {
    const id = useId();
    const { theme: rootTheme, resetTheme: rootResetTheme, isCollapsed } = useSidebarContext();
    const { isInsideCollapse } = useSidebarItemContext();

    const provider = useThemeProvider();
    const theme = resolveTheme(
      [sidebarTheme.item, provider.theme?.sidebar?.item, rootTheme?.item, customTheme],
      [get(rootResetTheme, "item"), resetTheme],
    );

    return (
      <ListItem theme={theme} className={theme.listItem} id={id} isCollapsed={isCollapsed} tooltipChildren={children}>
        <Component
          aria-labelledby={`flowbite-sidebar-item-${id}`}
          ref={ref}
          className={twMerge(
            theme.base,
            isActive && theme.active,
            !isCollapsed && isInsideCollapse && theme.collapsed.insideCollapse,
            className,
          )}
          {...props}
        >
          {Icon && (
            <Icon
              aria-hidden
              data-testid="flowbite-sidebar-item-icon"
              className={twMerge(theme.icon.base, isActive && theme.icon.active)}
            />
          )}
          {isCollapsed && !Icon && (
            <span className={theme.collapsed.noIcon}>{(children as string).charAt(0).toLocaleUpperCase() ?? "?"}</span>
          )}
          {!isCollapsed && (
            <Children id={id} theme={theme}>
              {children}
            </Children>
          )}
          {!isCollapsed && label && (
            <Badge color={labelColor} data-testid="flowbite-sidebar-label" hidden={isCollapsed} className={theme.label}>
              {label}
            </Badge>
          )}
        </Component>
      </ListItem>
    );
  },
);

SidebarItem.displayName = "Sidebar.Item";
