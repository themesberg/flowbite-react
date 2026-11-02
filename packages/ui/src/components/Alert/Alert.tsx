"use client";

import { forwardRef, useEffect, useRef, useState, type ComponentProps, type FC, type ReactNode } from "react";
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
    style,
    timing = "ease-out",
    transition = "transition-opacity",
    withBorderAccent,
    ...restProps
  } = resolveProps(props, provider.props?.alert);

  const [isDismissing, setIsDismissing] = useState(false);
  const dismissal = useRef<{
    delay: number;
    event: React.MouseEvent<HTMLButtonElement>;
    onDismiss: AlertProps["onDismiss"];
  } | null>(null);

  useEffect(() => {
    if (!isDismissing || !dismissal.current) {
      return;
    }
    const { delay, event, onDismiss } = dismissal.current;
    const timeoutId = setTimeout(() => onDismiss?.(event), delay);
    return () => clearTimeout(timeoutId);
  }, [isDismissing]);

  const handleDismissClick: ComponentProps<"button">["onClick"] = (event) => {
    if (duration > 0) {
      dismissal.current = { delay: duration, event, onDismiss };
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
        isDismissing && twMerge(transition, timing, theme.transition?.base, theme.transition?.timing, "opacity-0"),
        className,
      )}
      role="alert"
      style={isDismissing ? { ...style, transitionDuration: `${duration}ms` } : style}
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
