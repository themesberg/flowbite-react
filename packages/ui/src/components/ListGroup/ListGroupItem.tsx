"use client";

import { forwardRef, type ComponentProps, type FC } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
import { listGroupTheme } from "./theme";

export interface ListGroupItemTheme {
  base: string;
  link: {
    base: string;
    active: FlowbiteBoolean;
    disabled: FlowbiteBoolean;
    href: FlowbiteBoolean;
    icon: string;
  };
}

type GenericLinkButtonProps = ComponentProps<"a"> & ComponentProps<"button">;

export interface ListGroupItemProps extends GenericLinkButtonProps, ThemingProps<ListGroupItemTheme> {
  active?: boolean;
  icon?: FC<ComponentProps<"svg">>;
}

export const ListGroupItem = forwardRef<HTMLLIElement, ListGroupItemProps>(
  (
    {
      active: isActive,
      children,
      className,
      href,
      icon: Icon,
      onClick,
      disabled,
      theme: customTheme,
      clearTheme,
      applyTheme,
      ...props
    },
    ref,
  ) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [listGroupTheme.item, provider.theme?.listGroup?.item, customTheme],
      [get(provider.clearTheme, "listGroup.item"), clearTheme],
      [get(provider.applyTheme, "listGroup.item"), applyTheme],
    );

    const isLink = typeof href !== "undefined";
    const Component = isLink ? "a" : "button";

    return (
      <li ref={ref} className={twMerge(theme.base, className)}>
        <Component
          href={href}
          onClick={onClick}
          type={isLink ? undefined : "button"}
          disabled={disabled}
          className={twMerge(
            theme.link.active[isActive ? "on" : "off"],
            theme.link.disabled[disabled ? "on" : "off"],
            theme.link.base,
            theme.link.href[isLink ? "on" : "off"],
          )}
          {...props}
        >
          {Icon && <Icon aria-hidden data-testid="flowbite-list-group-item-icon" className={theme.link.icon} />}
          {children}
        </Component>
      </li>
    );
  },
);

ListGroupItem.displayName = "ListGroupItem";
