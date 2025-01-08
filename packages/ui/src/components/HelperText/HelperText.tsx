"use client";

import type { ComponentProps } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DynamicStringEnumKeysOf, ThemingProps } from "../../types";
import type { FlowbiteColors } from "../Flowbite/FlowbiteTheme";
import { helperTextTheme } from "./theme";

export interface HelperTextTheme {
  root: HelperTextRootTheme;
}

export interface HelperTextRootTheme {
  base: string;
  colors: HelperColors;
}

export interface HelperColors extends Pick<FlowbiteColors, "gray" | "info" | "failure" | "warning" | "success"> {
  [key: string]: string;
}

export interface HelperTextProps extends Omit<ComponentProps<"p">, "color">, ThemingProps<HelperTextTheme> {
  color?: DynamicStringEnumKeysOf<HelperColors>;
  value?: string;
}

export function HelperText({
  children,
  className,
  color = "default",
  value,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: HelperTextProps) {
  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [helperTextTheme, provider.theme?.helperText, customTheme],
    [get(provider.clearTheme, "helperText"), clearTheme],
    [get(provider.applyTheme, "helperText"), applyTheme],
  );

  return (
    <p className={twMerge(theme.root.base, theme.root.colors[color], className)} {...props}>
      {value ?? children ?? ""}
    </p>
  );
}

HelperText.displayName = "HelperText";
