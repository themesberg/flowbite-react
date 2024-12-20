import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getStore } from "../../store";
import type { DeepPartial, DynamicStringEnumKeysOf, Unstyled } from "../../types";
import type { FlowbiteBoolean, FlowbiteColors, FlowbiteSizes } from "../Flowbite/FlowbiteTheme";
import { badgeTheme } from "./theme";

export interface FlowbiteBadgeTheme {
  root: FlowbiteBadgeRootTheme;
  icon: FlowbiteBadgeIconTheme;
}

export interface FlowbiteBadgeRootTheme {
  base: string;
  color: FlowbiteColors;
  href: string;
  size: BadgeSizes;
}

export interface FlowbiteBadgeIconTheme extends FlowbiteBoolean {
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
  theme?: DeepPartial<FlowbiteBadgeTheme>;
  unstyled?: Unstyled<FlowbiteBadgeTheme>;
}

export const Badge: FC<BadgeProps> = ({
  children,
  color = "info",
  href,
  icon: Icon,
  size = "xs",
  className,
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const theme = resolveTheme([badgeTheme, getStore().theme?.badge, customTheme], [unstyled]);

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
