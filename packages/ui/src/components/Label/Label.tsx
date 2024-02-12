import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { FlowbiteStateColors } from "../Flowbite";

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
  color?: keyof LabelColors;
  disabled?: boolean;
  theme?: DeepPartial<FlowbiteLabelTheme>;
  value?: string;
}

export const Label: FC<LabelProps> = ({
  children,
  className,
  color = "default",
  disabled = false,
  theme: customTheme = {},
  value,
  ...props
}) => {
  const theme = mergeDeep(getTheme().label, customTheme);

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
