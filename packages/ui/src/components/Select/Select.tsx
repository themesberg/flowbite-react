"use client";

import type { ComponentProps, FC, ReactNode } from "react";
import { forwardRef } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DynamicStringEnumKeysOf, ThemingProps } from "../../types";
import type { FlowbiteBoolean, FlowbiteColors, FlowbiteSizes } from "../Flowbite/FlowbiteTheme";
import { HelperText } from "../HelperText";
import { selectTheme } from "./theme";

export interface SelectTheme {
  base: string;
  addon: string;
  field: {
    base: string;
    icon: {
      base: string;
      svg: string;
    };
    select: {
      base: string;
      withIcon: FlowbiteBoolean;
      withAddon: FlowbiteBoolean;
      withShadow: FlowbiteBoolean;
      sizes: SelectSizes;
      colors: SelectColors;
    };
  };
}

export interface SelectColors extends Pick<FlowbiteColors, "gray" | "info" | "failure" | "warning" | "success"> {
  [key: string]: string;
}

export interface SelectSizes extends Pick<FlowbiteSizes, "sm" | "md" | "lg"> {
  [key: string]: string;
}

export interface SelectProps extends Omit<ComponentProps<"select">, "color" | "ref">, ThemingProps<SelectTheme> {
  addon?: ReactNode;
  color?: DynamicStringEnumKeysOf<SelectColors>;
  helperText?: ReactNode;
  icon?: FC<ComponentProps<"svg">>;
  shadow?: boolean;
  sizing?: DynamicStringEnumKeysOf<SelectSizes>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      addon,
      children,
      className,
      color = "gray",
      helperText,
      icon: Icon,
      shadow,
      sizing = "md",
      theme: customTheme,
      clearTheme,
      applyTheme,
      ...props
    },
    ref,
  ) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [selectTheme, provider.theme?.select, customTheme],
      [get(provider.clearTheme, "select"), clearTheme],
      [get(provider.applyTheme, "select"), applyTheme],
    );

    return (
      <div className={twMerge(theme.base, className)}>
        {addon && <span className={theme.addon}>{addon}</span>}
        <div className={theme.field.base}>
          {Icon && (
            <div className={theme.field.icon.base}>
              <Icon className={theme.field.icon.svg} />
            </div>
          )}
          <select
            className={twMerge(
              theme.field.select.base,
              theme.field.select.colors[color],
              theme.field.select.sizes[sizing],
              theme.field.select.withIcon[Icon ? "on" : "off"],
              theme.field.select.withAddon[addon ? "on" : "off"],
              theme.field.select.withShadow[shadow ? "on" : "off"],
            )}
            {...props}
            ref={ref}
          >
            {children}
          </select>
          {helperText && <HelperText color={color}>{helperText}</HelperText>}
        </div>
      </div>
    );
  },
);

Select.displayName = "Select";
