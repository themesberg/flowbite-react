"use client";

import type { ComponentProps, FC, ReactNode } from "react";
import { forwardRef } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, DynamicStringEnumKeysOf } from "../../types";
import type { FlowbiteBoolean, FlowbiteColors, FlowbiteSizes } from "../Flowbite/FlowbiteTheme";
import { HelperText } from "../HelperText";
import { textInputTheme } from "./theme";

export interface FlowbiteTextInputTheme {
  base: string;
  addon: string;
  field: {
    base: string;
    icon: {
      base: string;
      svg: string;
    };
    rightIcon: {
      base: string;
      svg: string;
    };
    input: {
      base: string;
      sizes: FlowbiteTextInputSizes;
      colors: FlowbiteTextInputColors;
      withIcon: FlowbiteBoolean;
      withRightIcon: FlowbiteBoolean;
      withAddon: FlowbiteBoolean;
      withShadow: FlowbiteBoolean;
    };
  };
}

export interface FlowbiteTextInputColors
  extends Pick<FlowbiteColors, "gray" | "info" | "failure" | "warning" | "success"> {
  [key: string]: string;
}

export interface FlowbiteTextInputSizes extends Pick<FlowbiteSizes, "sm" | "md" | "lg"> {
  [key: string]: string;
}

export interface TextInputProps extends Omit<ComponentProps<"input">, "ref" | "color"> {
  addon?: ReactNode;
  color?: DynamicStringEnumKeysOf<FlowbiteTextInputColors>;
  helperText?: ReactNode;
  icon?: FC<ComponentProps<"svg">>;
  rightIcon?: FC<ComponentProps<"svg">>;
  shadow?: boolean;
  sizing?: DynamicStringEnumKeysOf<FlowbiteTextInputSizes>;
  theme?: DeepPartial<FlowbiteTextInputTheme>;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      addon,
      className,
      color = "gray",
      helperText,
      icon: Icon,
      rightIcon: RightIcon,
      shadow,
      sizing = "md",
      theme: customTheme,
      type = "text",
      ...props
    },
    ref,
  ) => {
    const provider = useThemeProvider();
    const theme = resolveTheme([textInputTheme, provider.theme?.textInput, customTheme]);

    return (
      <>
        <div className={twMerge(theme.base, className)}>
          {addon && <span className={theme.addon}>{addon}</span>}
          <div className={theme.field.base}>
            {Icon && (
              <div className={theme.field.icon.base}>
                <Icon className={theme.field.icon.svg} />
              </div>
            )}
            {RightIcon && (
              <div data-testid="right-icon" className={theme.field.rightIcon.base}>
                <RightIcon className={theme.field.rightIcon.svg} />
              </div>
            )}
            <input
              className={twMerge(
                theme.field.input.base,
                theme.field.input.colors[color],
                theme.field.input.sizes[sizing],
                theme.field.input.withIcon[Icon ? "on" : "off"],
                theme.field.input.withRightIcon[RightIcon ? "on" : "off"],
                theme.field.input.withAddon[addon ? "on" : "off"],
                theme.field.input.withShadow[shadow ? "on" : "off"],
              )}
              type={type}
              {...props}
              ref={ref}
            />
          </div>
        </div>
        {helperText && <HelperText color={color}>{helperText}</HelperText>}
      </>
    );
  },
);

TextInput.displayName = "TextInput";
