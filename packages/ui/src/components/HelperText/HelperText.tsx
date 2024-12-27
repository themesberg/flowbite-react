"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
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

export const HelperText: FC<HelperTextProps> = ({
  children,
  className,
  color = "default",
  theme: customTheme,
  resetTheme,
  value,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([helperTextTheme, provider.theme?.helperText, customTheme], [resetTheme]);

  return (
    <p className={twMerge(theme.root.base, theme.root.colors[color], className)} {...props}>
      {value ?? children ?? ""}
    </p>
  );
};

HelperText.displayName = "HelperText";
