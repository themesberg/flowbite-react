import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { FlowbiteColors } from "../Flowbite";

export interface FlowbiteHelperTextTheme {
  root: FlowbiteHelperTextRootTheme;
}

export interface FlowbiteHelperTextRootTheme {
  base: string;
  colors: HelperColors;
}

export interface HelperColors extends Pick<FlowbiteColors, "gray" | "info" | "failure" | "warning" | "success"> {
  [key: string]: string;
}

export interface HelperTextProps extends Omit<ComponentProps<"p">, "color"> {
  color?: keyof HelperColors;
  theme?: DeepPartial<FlowbiteHelperTextTheme>;
  value?: string;
}

export const HelperText: FC<HelperTextProps> = ({
  children,
  className,
  color = "default",
  theme: customTheme = {},
  value,
  ...props
}) => {
  const theme = mergeDeep(getTheme().helperText, customTheme);

  return (
    <p className={twMerge(theme.root.base, theme.root.colors[color], className)} {...props}>
      {value ?? children ?? ""}
    </p>
  );
};

HelperText.displayName = "HelperText";
