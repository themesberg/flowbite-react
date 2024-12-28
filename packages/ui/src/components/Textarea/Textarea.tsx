"use client";

import type { ComponentProps, ReactNode } from "react";
import { forwardRef } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DynamicStringEnumKeysOf, ThemingProps } from "../../types";
import type { FlowbiteBoolean, FlowbiteColors } from "../Flowbite/FlowbiteTheme";
import { HelperText } from "../HelperText";
import { textareaTheme } from "./theme";

export interface TextareaTheme {
  base: string;
  colors: TextareaColors;
  withShadow: FlowbiteBoolean;
}

export interface TextareaColors extends Pick<FlowbiteColors, "gray" | "info" | "failure" | "warning" | "success"> {
  [key: string]: string;
}

export interface TextareaProps extends Omit<ComponentProps<"textarea">, "color" | "ref">, ThemingProps<TextareaTheme> {
  color?: DynamicStringEnumKeysOf<TextareaColors>;
  helperText?: ReactNode;
  shadow?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, color = "gray", helperText, shadow, theme: customTheme, resetTheme, applyTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = resolveTheme(
      [textareaTheme, provider.theme?.textarea, customTheme],
      [get(provider.resetTheme, "textarea"), resetTheme],
      [get(provider.applyTheme, "textarea"), applyTheme],
    );

    return (
      <>
        <textarea
          ref={ref}
          className={twMerge(theme.base, theme.colors[color], theme.withShadow[shadow ? "on" : "off"], className)}
          {...props}
        />
        {helperText && <HelperText color={color}>{helperText}</HelperText>}
      </>
    );
  },
);

Textarea.displayName = "Textarea";
