"use client";

import type { ComponentProps, ElementType, FC, PropsWithChildren, ReactNode } from "react";
import { forwardRef, useId } from "react";
import { twMerge } from "tailwind-merge";
import { resolveTheme } from "../../helpers/resolve-theme";
import type { DeepPartial, DynamicStringEnumKeysOf } from "../../types";
import { Badge } from "../Badge";
import type { FlowbiteColors } from "../Flowbite/FlowbiteTheme";
import { Tooltip } from "../Tooltip";
import { useSidebarContext } from "./SidebarContext";
import { useSidebarItemContext } from "./SidebarItemContext";

export interface FlowbiteSidebarItemTheme {
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
  theme?: DeepPartial<FlowbiteSidebarItemTheme>;
}

export interface SidebarItemLabelColors extends Pick<FlowbiteColors, "gray"> {
  [key: string]: string;
}

const ListItem: FC<
  PropsWithChildren<{
    id: string;
    theme: FlowbiteSidebarItemTheme;
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

const Children: FC<PropsWithChildren<{ id: string; theme: FlowbiteSidebarItemTheme }>> = ({ id, theme, children }) => {
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
      ...props
    },
    ref,
  ) => {
    const id = useId();
    const { theme: rootTheme, isCollapsed } = useSidebarContext();
    const { isInsideCollapse } = useSidebarItemContext();

    const theme = resolveTheme([rootTheme.item, customTheme], { shouldPrefix: false });

    return (
      <ListItem theme={theme} className={theme.listItem} id={id} isCollapsed={isCollapsed} tooltipChildren={children}>
        <Component
          aria-labelledby={`flowbite-sidebar-item-${id}`}
          ref={ref}
          className={twMerge(
            theme.base,
            isActive && theme.active,
            !isCollapsed && isInsideCollapse && theme.collapsed?.insideCollapse,
            className,
          )}
          {...props}
        >
          {Icon && (
            <Icon
              aria-hidden
              data-testid="flowbite-sidebar-item-icon"
              className={twMerge(theme.icon?.base, isActive && theme.icon?.active)}
            />
          )}
          {isCollapsed && !Icon && (
            <span className={theme.collapsed?.noIcon}>{(children as string).charAt(0).toLocaleUpperCase() ?? "?"}</span>
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
