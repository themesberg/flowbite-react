"use client";

import type { ComponentProps, ElementType, FC } from "react";
import { twMerge } from "tailwind-merge";
import { resolveTheme } from "../../helpers/resolve-theme";
import type { DeepPartial } from "../../types";
import { useNavbarContext } from "./NavbarContext";

export interface FlowbiteNavbarBrandTheme {
  base: string;
}

export interface NavbarBrandProps extends ComponentProps<"a">, Record<string, unknown> {
  as?: ElementType;
  href?: string;
  theme?: DeepPartial<FlowbiteNavbarBrandTheme>;
}

export const NavbarBrand: FC<NavbarBrandProps> = ({
  as: Component = "a",
  children,
  className,
  theme: customTheme,
  ...props
}) => {
  const { theme: rootTheme } = useNavbarContext();

  const theme = resolveTheme([rootTheme.brand, customTheme], { shouldPrefix: false });

  return (
    <Component className={twMerge(theme.base, className)} {...props}>
      {children}
    </Component>
  );
};
