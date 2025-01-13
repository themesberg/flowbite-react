"use client";

import type { ElementType } from "react";
import { forwardRef, type ReactNode } from "react";
import type { PolymorphicComponentPropWithRef, PolymorphicRef } from "../../helpers/generic-as-prop";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DynamicStringEnumKeysOf, ThemingProps } from "../../types";
import type { FlowbiteBoolean, FlowbiteColors, FlowbiteSizes, FlowbiteStateColors } from "../Flowbite/FlowbiteTheme";
import { Spinner } from "../Spinner";
import { ButtonBase, type ButtonBaseProps } from "./ButtonBase";
import { useButtonGroupContext } from "./ButtonGroupContext";
import { buttonTheme } from "./theme";

export interface ButtonTheme {
  base: string;
  fullSized: string;
  grouped: string;
  color: ButtonColors;
  disabled: string;
  isProcessing: string;
  spinnerSlot: string;
  spinnerLeftPosition: ButtonSizes;
  gradient: ButtonGradientColors;
  gradientDuoTone: ButtonGradientDuoToneColors;
  inner: ButtonInnerTheme;
  label: string;
  outline: ButtonOutlineTheme;
  pill: FlowbiteBoolean;
  size: ButtonSizes;
}

export interface ButtonInnerTheme {
  base: string;
  outline: string;
  isProcessingPadding: ButtonSizes;
}

export interface ButtonOutlineTheme extends FlowbiteBoolean {
  color: ButtonOutlineColors;
  pill: FlowbiteBoolean;
}

export interface ButtonColors
  extends Pick<FlowbiteColors, "dark" | "failure" | "gray" | "info" | "light" | "purple" | "success" | "warning"> {
  [key: string]: string;
  default: string;
  alternative: string;
}

export interface ButtonGradientColors extends Omit<FlowbiteStateColors, "warning"> {
  [key: string]: string;
  cyan: string;
  lime: string;
  pink: string;
  purple: string;
  teal: string;
}

export interface ButtonGradientDuoToneColors {
  [key: string]: string;
  cyanToBlue: string;
  greenToBlue: string;
  pinkToOrange: string;
  purpleToBlue: string;
  purpleToPink: string;
  redToYellow: string;
  tealToLime: string;
}

export interface ButtonOutlineColors extends Pick<FlowbiteColors, "gray"> {
  [key: string]: string;
}

export interface ButtonSizes extends Pick<FlowbiteSizes, "xs" | "sm" | "lg" | "xl"> {
  [key: string]: string;
}

export type ButtonProps<T extends ElementType = "button"> = PolymorphicComponentPropWithRef<
  T,
  {
    href?: string;
    color?: DynamicStringEnumKeysOf<ButtonColors>;
    fullSized?: boolean;
    gradientDuoTone?: DynamicStringEnumKeysOf<ButtonGradientDuoToneColors>;
    gradientMonochrome?: DynamicStringEnumKeysOf<ButtonGradientColors>;
    target?: string;
    isProcessing?: boolean;
    processingLabel?: string;
    processingSpinner?: ReactNode;
    label?: ReactNode;
    outline?: boolean;
    pill?: boolean;
    size?: DynamicStringEnumKeysOf<ButtonSizes>;
  }
> &
  ThemingProps<ButtonTheme>;

type ButtonComponentType = (<C extends ElementType = "button">(props: ButtonProps<C>) => JSX.Element) & {
  displayName?: string;
};

export const Button = forwardRef(
  <T extends ElementType = "button">(
    {
      children,
      className,
      color = "default",
      disabled,
      fullSized,
      isProcessing,
      processingLabel = "Loading...",
      processingSpinner,
      gradientDuoTone,
      gradientMonochrome,
      label,
      outline: _outline,
      pill: _pill,
      size = "md",
      theme: customTheme,
      clearTheme,
      applyTheme,
      ...props
    }: ButtonProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const buttonGroup = useButtonGroupContext();
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [buttonTheme, provider.theme?.button, customTheme],
      [get(provider.clearTheme, "button"), clearTheme],
      [get(provider.applyTheme, "button"), applyTheme],
    );

    const outline = buttonGroup?.outline ?? _outline;
    const pill = buttonGroup?.pill ?? _pill;

    const theirProps = props as ButtonBaseProps<T>;

    return (
      <ButtonBase
        ref={ref}
        disabled={disabled}
        className={twMerge(
          theme.base,
          disabled && theme.disabled,
          !gradientDuoTone && !gradientMonochrome && theme.color[color],
          gradientDuoTone && !gradientMonochrome && theme.gradientDuoTone[gradientDuoTone],
          !gradientDuoTone && gradientMonochrome && theme.gradient[gradientMonochrome],
          outline && (theme.outline.color[color] ?? theme.outline.color.default),
          theme.pill[pill ? "on" : "off"],
          fullSized && theme.fullSized,
          buttonGroup && theme.grouped,
          className,
        )}
        {...theirProps}
      >
        <span
          className={twMerge(
            theme.inner.base,
            theme.outline[outline ? "on" : "off"],
            theme.outline.pill[outline && pill ? "on" : "off"],
            theme.size[size],
            outline && !theme.outline.color[color] && theme.inner.outline,
            isProcessing && theme.isProcessing,
            isProcessing && theme.inner.isProcessingPadding[size],
          )}
        >
          <>
            {isProcessing && (
              <span className={twMerge(theme.spinnerSlot, theme.spinnerLeftPosition[size])}>
                {processingSpinner || <Spinner size={size} />}
              </span>
            )}
            {typeof children !== "undefined" ? (
              children
            ) : (
              <span data-testid="flowbite-button-label" className={twMerge(theme.label)}>
                {isProcessing ? processingLabel : label}
              </span>
            )}
          </>
        </span>
      </ButtonBase>
    );
  },
) as ButtonComponentType;

Button.displayName = "Button";
