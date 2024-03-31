"use client";

import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite";
import { BottomNavigationItem, type FlowbiteBottomNavigationItemTheme } from "./BottomNavigationItem";

export interface FlowbiteBottomNavigationTheme {
  root: {
    base: string;
    inner: string;
  };
  border: FlowbiteBoolean;
  item: FlowbiteBottomNavigationItemTheme;
}

export interface BottomNavigationProps extends ComponentProps<"div"> {
  bordered?: boolean;
  theme?: DeepPartial<FlowbiteBottomNavigationTheme>;
}

const BottomNavigationComponent: FC<BottomNavigationProps> = ({
  children,
  bordered: isBordered = false,
  theme: customTheme = {},
  className,
  ...props
}) => {
  const theme = mergeDeep(getTheme().bottomNavigation, customTheme);

  return (
    <div className={twMerge(theme.root.base, className)} data-testid="flowbite-bottom-navigation" {...props}>
      <div className={twMerge(theme.root.inner, theme.border[isBordered ? "on" : "off"])}>{children}</div>
    </div>
  );
};

BottomNavigationComponent.displayName = "BottomNavigation";

export const BottomNavigation = Object.assign(BottomNavigationComponent, {
  Item: BottomNavigationItem,
});
