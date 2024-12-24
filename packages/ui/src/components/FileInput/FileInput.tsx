"use client";

import type { ComponentProps, ReactNode } from "react";
import { forwardRef } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, DynamicStringEnumKeysOf, ResetTheme } from "../../types";
import { HelperText } from "../HelperText";
import type { FlowbiteTextInputColors, FlowbiteTextInputSizes } from "../TextInput";
import { fileInputTheme } from "./theme";

export interface FlowbiteFileInputTheme {
  root: FlowbiteFileInputRootTheme;
  field: FlowbiteFileInputFieldTheme;
}

export interface FlowbiteFileInputRootTheme {
  base: string;
}

export interface FlowbiteFileInputFieldTheme {
  base: string;
  input: FlowbiteFileInputFieldInputTheme;
}

export interface FlowbiteFileInputFieldInputTheme {
  base: string;
  colors: FlowbiteTextInputColors;
  sizes: FlowbiteTextInputSizes;
}

export interface FileInputProps extends Omit<ComponentProps<"input">, "type" | "ref" | "color"> {
  color?: DynamicStringEnumKeysOf<FlowbiteTextInputColors>;
  helperText?: ReactNode;
  sizing?: DynamicStringEnumKeysOf<FlowbiteTextInputSizes>;
  theme?: DeepPartial<FlowbiteFileInputTheme>;
  resetTheme?: ResetTheme<FlowbiteFileInputTheme>;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, color = "gray", helperText, sizing = "md", theme: customTheme, resetTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = resolveTheme([fileInputTheme, provider.theme?.fileInput, customTheme], [resetTheme]);

    return (
      <>
        <div className={twMerge(theme.root.base, className)}>
          <div className={theme.field.base}>
            <input
              className={twMerge(
                theme.field.input.base,
                theme.field.input.colors[color],
                theme.field.input.sizes[sizing],
              )}
              {...props}
              type="file"
              ref={ref}
            />
          </div>
        </div>
        {helperText && <HelperText color={color}>{helperText}</HelperText>}
      </>
    );
  },
);

FileInput.displayName = "FileInput";
