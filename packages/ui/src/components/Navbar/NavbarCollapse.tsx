"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
import { useNavbarContext } from "./NavbarContext";
import { navbarTheme } from "./theme";

export interface FlowbiteNavbarCollapseTheme {
  base: string;
  list: string;
  hidden: FlowbiteBoolean;
}

export interface NavbarCollapseProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteNavbarCollapseTheme>;
  unstyled?: Unstyled<FlowbiteNavbarCollapseTheme>;
}

export const NavbarCollapse: FC<NavbarCollapseProps> = ({
  children,
  className,
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const { theme: rootTheme, unstyled: rootUnstyled, isOpen } = useNavbarContext();

  const theme = resolveTheme(
    [navbarTheme.collapse, getTheme()?.navbar?.collapse, rootTheme?.collapse, customTheme],
    [get(rootUnstyled, "collapse"), unstyled],
  );

  return (
    <div
      data-testid="flowbite-navbar-collapse"
      className={twMerge(theme.base, theme.hidden[!isOpen ? "on" : "off"], className)}
      {...props}
    >
      <ul className={theme.list}>{children}</ul>
    </div>
  );
};
