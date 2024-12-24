"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, DynamicStringEnumKeysOf, ResetTheme } from "../../types";
import type { FlowbiteStateColors } from "../Flowbite/FlowbiteTheme";
import { labelTheme } from "./theme";

export interface FlowbiteLabelTheme {
  root: FlowbiteLabelRootTheme;
}

export interface FlowbiteLabelRootTheme {
  base: string;
  colors: LabelColors;
  disabled: string;
}

export interface LabelColors extends FlowbiteStateColors {
  [key: string]: string;
  default: string;
}

export interface LabelProps extends Omit<ComponentProps<"label">, "color"> {
  color?: DynamicStringEnumKeysOf<LabelColors>;
  disabled?: boolean;
  theme?: DeepPartial<FlowbiteLabelTheme>;
  resetTheme?: ResetTheme<FlowbiteLabelTheme>;
  value?: string;
}

export const Label: FC<LabelProps> = ({
  children,
  className,
  color = "default",
  disabled = false,
  theme: customTheme,
  resetTheme,
  value,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([labelTheme, provider.theme?.label, customTheme], [resetTheme]);

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
