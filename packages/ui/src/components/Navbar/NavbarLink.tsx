"use client";

import type { ComponentProps, ElementType, MouseEvent } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
import { useNavbarContext } from "./NavbarContext";
import { navbarTheme } from "./theme";

export interface NavbarLinkTheme {
  base: string;
  active: FlowbiteBoolean;
  disabled: FlowbiteBoolean;
}

export interface NavbarLinkProps extends ComponentProps<"a">, Record<string, unknown>, ThemingProps<NavbarLinkTheme> {
  active?: boolean;
  as?: ElementType;
  disabled?: boolean;
  href?: string;
}

export function NavbarLink({
  active,
  as: Component = "a",
  disabled,
  children,
  className,
  onClick,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: NavbarLinkProps) {
  const { theme: rootTheme, clearTheme: rootClearTheme, applyTheme: rootApplyTheme, setIsOpen } = useNavbarContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [navbarTheme.link, provider.theme?.navbar?.link, rootTheme?.link, customTheme],
    [get(provider.clearTheme, "navbar.link"), get(rootClearTheme, "link"), clearTheme],
    [get(provider.applyTheme, "navbar.link"), get(rootApplyTheme, "link"), applyTheme],
  );

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    setIsOpen(false);
    onClick?.(event);
  }

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
}

NavbarLink.displayName = "NavbarLink";
