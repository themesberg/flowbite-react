"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, DynamicStringEnumKeysOf, ResetTheme } from "../../types";
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

export interface BadgeProps extends Omit<ComponentProps<"span">, "color"> {
  color?: DynamicStringEnumKeysOf<FlowbiteColors>;
  href?: string;
  icon?: FC<ComponentProps<"svg">>;
  size?: DynamicStringEnumKeysOf<BadgeSizes>;
  theme?: DeepPartial<BadgeTheme>;
  resetTheme?: ResetTheme<BadgeTheme>;
}

export const Badge: FC<BadgeProps> = ({
  children,
  color = "info",
  href,
  icon: Icon,
  size = "xs",
  className,
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([badgeTheme, provider.theme?.badge, customTheme], [resetTheme]);

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
