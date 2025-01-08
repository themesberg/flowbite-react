"use client";

import type { ComponentProps, ElementType } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { useNavbarContext } from "./NavbarContext";
import { navbarTheme } from "./theme";

export interface NavbarBrandTheme {
  base: string;
}

export interface NavbarBrandProps extends ComponentProps<"a">, Record<string, unknown>, ThemingProps<NavbarBrandTheme> {
  as?: ElementType;
  href?: string;
}

export function NavbarBrand({
  as: Component = "a",
  children,
  className,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: NavbarBrandProps) {
  const { theme: rootTheme, clearTheme: rootClearTheme, applyTheme: rootApplyTheme } = useNavbarContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [navbarTheme.brand, provider.theme?.navbar?.brand, rootTheme?.brand, customTheme],
    [get(provider.clearTheme, "navbar.brand"), get(rootClearTheme, "brand"), clearTheme],
    [get(provider.applyTheme, "navbar.brand"), get(rootApplyTheme, "brand"), applyTheme],
  );

  return (
    <Component className={twMerge(theme.base, className)} {...props}>
      {children}
    </Component>
  );
}

NavbarBrand.displayName = "NavbarBrand";
