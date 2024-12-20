"use client";

import type { ComponentProps, ElementType, FC, MouseEvent } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getStore } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
import { useNavbarContext } from "./NavbarContext";
import { navbarTheme } from "./theme";

export interface FlowbiteNavbarLinkTheme {
  base: string;
  active: FlowbiteBoolean;
  disabled: FlowbiteBoolean;
}

export interface NavbarLinkProps extends ComponentProps<"a">, Record<string, unknown> {
  active?: boolean;
  as?: ElementType;
  disabled?: boolean;
  href?: string;
  theme?: DeepPartial<FlowbiteNavbarLinkTheme>;
  unstyled?: Unstyled<FlowbiteNavbarLinkTheme>;
}

export const NavbarLink: FC<NavbarLinkProps> = ({
  active,
  as: Component = "a",
  disabled,
  children,
  className,
  theme: customTheme,
  unstyled,
  onClick,
  ...props
}) => {
  const { theme: rootTheme, setIsOpen } = useNavbarContext();

  const theme = resolveTheme(
    [navbarTheme.link, getStore().theme?.navbar?.link, rootTheme?.link, customTheme],
    [unstyled],
  );

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    onClick?.(event);
  };

  return (
    <li>
      <Component
        className={twMerge(
          theme.base,
          active && theme.active.on,
          !active && !disabled && theme.active.off,
          theme.disabled[disabled ? "on" : "off"],
          className,
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Component>
    </li>
  );
};
