"use client";

import type { ComponentProps, ElementType, FC, MouseEvent } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
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
  const { theme: rootTheme, unstyled: rootUnstyled, setIsOpen } = useNavbarContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [navbarTheme.link, provider.theme?.navbar?.link, rootTheme?.link, customTheme],
    [get(rootUnstyled, "link"), unstyled],
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
