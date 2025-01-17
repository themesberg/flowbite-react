"use client";

import { forwardRef, type ComponentProps, type FC } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DynamicStringEnumKeysOf, ThemingProps } from "../../types";
import type { FlowbiteBoolean, FlowbiteColors, FlowbiteSizes } from "../Flowbite/FlowbiteTheme";
import { badgeTheme } from "./theme";

export interface BadgeTheme {
  root: BadgeRootTheme;
  icon: BadgeIconTheme;
}

export interface BadgeRootTheme {
  base: string;
  color: FlowbiteColors;
  size: BadgeSizes;
}

export interface BadgeIconTheme extends FlowbiteBoolean {
  size: BadgeSizes;
}

export interface BadgeSizes extends Pick<FlowbiteSizes, "xs" | "sm"> {
  [key: string]: string;
}

export interface BadgeProps extends Omit<ComponentProps<"span">, "color">, ThemingProps<BadgeTheme> {
  color?: DynamicStringEnumKeysOf<FlowbiteColors>;
  icon?: FC<ComponentProps<"svg">>;
  size?: DynamicStringEnumKeysOf<BadgeSizes>;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      color = "info",
      icon: Icon,
      size = "xs",
      className,
      theme: customTheme,
      clearTheme,
      applyTheme,
      ...props
    },
    ref,
  ) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [badgeTheme, provider.theme?.badge, customTheme],
      [get(provider.clearTheme, "badge"), clearTheme],
      [get(provider.applyTheme, "badge"), applyTheme],
    );

    return (
      <span
        ref={ref}
        className={twMerge(
          theme.root.base,
          theme.root.color[color],
          theme.root.size[size],
          theme.icon[Icon ? "on" : "off"],
          className,
        )}
        data-testid="flowbite-badge"
        {...props}
      >
        {Icon && <Icon aria-hidden className={theme.icon.size[size]} data-testid="flowbite-badge-icon" />}
        {children && <span>{children}</span>}
      </span>
    );
  },
);

Badge.displayName = "Badge";
