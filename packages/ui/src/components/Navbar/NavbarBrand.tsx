"use client";

import type { ComponentProps, ElementType, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, Unstyled } from "../../types";
import { useNavbarContext } from "./NavbarContext";
import { navbarTheme } from "./theme";

export interface FlowbiteNavbarBrandTheme {
  base: string;
}

export interface NavbarBrandProps extends ComponentProps<"a">, Record<string, unknown> {
  as?: ElementType;
  href?: string;
  theme?: DeepPartial<FlowbiteNavbarBrandTheme>;
  unstyled?: Unstyled<FlowbiteNavbarBrandTheme>;
}

export const NavbarBrand: FC<NavbarBrandProps> = ({
  as: Component = "a",
  children,
  className,
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const { theme: rootTheme, unstyled: rootUnstyled } = useNavbarContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [navbarTheme.brand, provider.theme?.navbar?.brand, rootTheme?.brand, customTheme],
    [get(rootUnstyled, "brand"), unstyled],
  );

  return (
    <Component className={twMerge(theme.base, className)} {...props}>
      {children}
    </Component>
  );
};
