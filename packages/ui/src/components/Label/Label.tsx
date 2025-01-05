"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DynamicStringEnumKeysOf, ThemingProps } from "../../types";
import type { FlowbiteStateColors } from "../Flowbite/FlowbiteTheme";
import { labelTheme } from "./theme";

export interface LabelTheme {
  root: LabelRootTheme;
}

export interface LabelRootTheme {
  base: string;
  colors: LabelColors;
  disabled: string;
}

export interface LabelColors extends FlowbiteStateColors {
  [key: string]: string;
  default: string;
}

export interface LabelProps extends Omit<ComponentProps<"label">, "color">, ThemingProps<LabelTheme> {
  color?: DynamicStringEnumKeysOf<LabelColors>;
  disabled?: boolean;
  value?: string;
}

export const Label: FC<LabelProps> = ({
  children,
  className,
  color = "default",
  disabled = false,
  value,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [labelTheme, provider.theme?.label, customTheme],
    [get(provider.clearTheme, "label"), clearTheme],
    [get(provider.applyTheme, "label"), applyTheme],
  );

  return (
    <label
      className={twMerge(theme.root.base, theme.root.colors[color], disabled && theme.root.disabled, className)}
      data-testid="flowbite-label"
      {...props}
    >
      {value ?? children ?? ""}
    </label>
  );
};

Label.displayName = "Label";
