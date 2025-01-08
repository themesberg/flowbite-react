"use client";

import type { ComponentPropsWithoutRef } from "react";
import { forwardRef, useId } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { floatingLabelTheme, type FloatingLabelTheme } from "./theme";

export type FloatingLabelColor = "default" | "success" | "error";
export type FloatingLabelSizing = "sm" | "md";
export type FloatingLabelVariant = "filled" | "outlined" | "standard";

export interface FloatingLabelProps extends ComponentPropsWithoutRef<"input">, ThemingProps<FloatingLabelTheme> {
  label: string;
  helperText?: string;
  color?: FloatingLabelColor;
  sizing?: FloatingLabelSizing;
  variant: FloatingLabelVariant;
  disabled?: boolean;
}

export const FloatingLabel = forwardRef<HTMLInputElement, FloatingLabelProps>(
  (
    {
      label,
      helperText,
      color = "default",
      sizing = "md",
      variant,
      disabled = false,
      className,
      theme: customTheme,
      clearTheme,
      applyTheme,
      ...props
    },
    ref,
  ) => {
    const randomId = useId();

    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [floatingLabelTheme, provider.theme?.floatingLabel, customTheme],
      [get(provider.clearTheme, "floatingLabel"), clearTheme],
      [get(provider.applyTheme, "floatingLabel"), applyTheme],
    );

    return (
      <div>
        <div className={twMerge("relative", variant === "standard" ? "z-0" : "")}>
          <input
            type="text"
            id={props.id ? props.id : "floatingLabel" + randomId}
            aria-describedby="outlined_success_help"
            className={twMerge(theme.input[color][variant][sizing], className)}
            placeholder=" "
            data-testid="floating-label"
            disabled={disabled}
            {...props}
            ref={ref}
          />
          <label
            htmlFor={props.id ? props.id : "floatingLabel" + randomId}
            className={twMerge(theme.label[color][variant][sizing], className)}
          >
            {label}
          </label>
        </div>
        <p id={"outlined_helper_text" + randomId} className={twMerge(theme.helperText[color], className)}>
          {helperText}
        </p>
      </div>
    );
  },
);

FloatingLabel.displayName = "FloatingLabel";
