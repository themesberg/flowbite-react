"use client";

import { forwardRef, useEffect, useState, type ComponentProps, type FC, type ReactNode } from "react";
import { get } from "../../helpers/get";
import { resolveProps } from "../../helpers/resolve-props";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { XIcon } from "../../icons/x-icon";
import { useThemeProvider } from "../../theme/provider";
import type { DynamicStringEnumKeysOf, FlowbiteColors, ThemingProps } from "../../types";
import { alertTheme } from "./theme";

export interface AlertTheme {
  base: string;
  borderAccent: string;
  closeButton: AlertCloseButtonTheme;
  color: FlowbiteColors;
  icon: string;
  rounded: string;
  transition?: Partial<AlertTransitionTheme>;
  wrapper: string;
}

export interface AlertCloseButtonTheme {
  base: string;
  color: FlowbiteColors;
  icon: string;
}

export interface AlertTransitionTheme {
  base: string;
  duration: string;
  timing: string;
}

export interface AlertProps extends Omit<ComponentProps<"div">, "color">, ThemingProps<AlertTheme> {
  additionalContent?: ReactNode;
  color?: DynamicStringEnumKeysOf<FlowbiteColors>;
  duration?: number;
  icon?: FC<ComponentProps<"svg">>;
  onDismiss?: ComponentProps<"button">["onClick"];
  rounded?: boolean;
  timing?: string;
  transition?: string;
  withBorderAccent?: boolean;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [alertTheme, provider.theme?.alert, props.theme],
    [get(provider.clearTheme, "alert"), props.clearTheme],
    [get(provider.applyTheme, "alert"), props.applyTheme],
  );

  const {
    additionalContent,
    children,
    className,
    color = "info",
    duration = 300,
    icon: Icon,
    onDismiss,
    rounded = true,
    timing = "ease-out",
    transition = "transition-opacity",
    withBorderAccent,
    ...restProps
  } = resolveProps(props, provider.props?.alert);

  const [isDismissing, setIsDismissing] = useState(false);

  useEffect(() => {
    if (!isDismissing) {
      return;
    }
    const timeoutId = setTimeout(() => {
      onDismiss?.(new MouseEvent("click") as unknown as React.MouseEvent<HTMLButtonElement>);
    }, duration);
    return () => clearTimeout(timeoutId);
  }, [isDismissing, duration, onDismiss]);

  const handleDismissClick: ComponentProps<"button">["onClick"] = (event) => {
    if (transition || duration > 0) {
      setIsDismissing(true);
      return;
    }
    onDismiss?.(event);
  };

  return (
    <div
      ref={ref}
      className={twMerge(
        theme.base,
        theme.color[color],
        rounded && theme.rounded,
        withBorderAccent && theme.borderAccent,
        isDismissing &&
          twMerge(
            transition,
            `duration-${duration}`,
            timing,
            theme.transition?.base,
            theme.transition?.duration,
            theme.transition?.timing,
            "opacity-0",
          ),
        className,
      )}
      role="alert"
      {...restProps}
    >
      <div className={theme.wrapper} data-testid="flowbite-alert-wrapper">
        {Icon && <Icon className={theme.icon} data-testid="flowbite-alert-icon" />}
        <div>{children}</div>
        {typeof onDismiss === "function" && (
          <button
            aria-label="Dismiss"
            className={twMerge(theme.closeButton.base, theme.closeButton.color[color])}
            onClick={handleDismissClick}
            type="button"
          >
            <XIcon aria-hidden className={theme.closeButton.icon} />
          </button>
        )}
      </div>
      {additionalContent && <div>{additionalContent}</div>}
    </div>
  );
});

Alert.displayName = "Alert";
