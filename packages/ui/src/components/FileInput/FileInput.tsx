"use client";

import type { ComponentProps, ReactNode } from "react";
import { forwardRef } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DynamicStringEnumKeysOf, ThemingProps } from "../../types";
import { HelperText } from "../HelperText";
import type { TextInputColors, TextInputSizes } from "../TextInput";
import { fileInputTheme } from "./theme";

export interface FileInputTheme {
  root: FileInputRootTheme;
  field: FileInputFieldTheme;
}

export interface FileInputRootTheme {
  base: string;
}

export interface FileInputFieldTheme {
  base: string;
  input: FileInputFieldInputTheme;
}

export interface FileInputFieldInputTheme {
  base: string;
  colors: TextInputColors;
  sizes: TextInputSizes;
}

export interface FileInputProps
  extends Omit<ComponentProps<"input">, "type" | "ref" | "color">,
    ThemingProps<FileInputTheme> {
  color?: DynamicStringEnumKeysOf<TextInputColors>;
  helperText?: ReactNode;
  sizing?: DynamicStringEnumKeysOf<TextInputSizes>;
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
