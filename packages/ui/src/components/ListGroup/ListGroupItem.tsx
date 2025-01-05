"use client";

import type { ComponentProps, FC, PropsWithChildren } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
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

export interface ListGroupItemProps extends PropsWithChildren, ThemingProps<ListGroupItemTheme> {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  icon?: FC<ComponentProps<"svg">>;
  onClick?: () => void;
}

export const ListGroupItem: FC<ListGroupItemProps & ComponentProps<"a"> & ComponentProps<"button">> = ({
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
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [listGroupTheme.item, provider.theme?.listGroup?.item, customTheme],
    [get(provider.clearTheme, "listGroup.item"), clearTheme],
    [get(provider.applyTheme, "listGroup.item"), applyTheme],
  );

  const isLink = typeof href !== "undefined";
  const Component = isLink ? "a" : "button";

  return (
    <li className={twMerge(theme.base, className)}>
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
};

ListGroupItem.displayName = "ListGroupItem";
