import type { ComponentProps, ReactNode } from "react";
import { forwardRef } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getStore } from "../../store";
import type { DeepPartial, DynamicStringEnumKeysOf } from "../../types";
import type { FlowbiteBoolean, FlowbiteColors } from "../Flowbite/FlowbiteTheme";
import { HelperText } from "../HelperText";
import { textareaTheme } from "./theme";

export interface FlowbiteTextareaTheme {
  base: string;
  colors: TextareaColors;
  withShadow: FlowbiteBoolean;
}

export interface TextareaColors extends Pick<FlowbiteColors, "gray" | "info" | "failure" | "warning" | "success"> {
  [key: string]: string;
}

export interface TextareaProps extends Omit<ComponentProps<"textarea">, "color" | "ref"> {
  color?: DynamicStringEnumKeysOf<TextareaColors>;
  helperText?: ReactNode;
  shadow?: boolean;
  theme?: DeepPartial<FlowbiteTextareaTheme>;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, color = "gray", helperText, shadow, theme: customTheme, ...props }, ref) => {
    const theme = resolveTheme([textareaTheme, getStore().theme?.textarea, customTheme]);

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
