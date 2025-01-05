"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
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
  href: string;
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
  href?: string;
  icon?: FC<ComponentProps<"svg">>;
  size?: DynamicStringEnumKeysOf<BadgeSizes>;
}

export const Badge: FC<BadgeProps> = ({
  children,
  color = "info",
  href,
  icon: Icon,
  size = "xs",
  className,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [badgeTheme, provider.theme?.badge, customTheme],
    [get(provider.clearTheme, "badge"), clearTheme],
    [get(provider.applyTheme, "badge"), applyTheme],
  );

  const Content: FC = () => (
    <span
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

  return href ? (
    <a className={theme.root.href} href={href}>
      <Content />
    </a>
  ) : (
    <Content />
  );
};

Badge.displayName = "Badge";
