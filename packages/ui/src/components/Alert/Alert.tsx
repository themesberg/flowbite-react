"use client";

import type { ComponentProps, FC, ReactNode } from "react";
import { HiX } from "react-icons/hi";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DynamicStringEnumKeysOf, ThemingProps } from "../../types";
import type { FlowbiteColors } from "../Flowbite/FlowbiteTheme";
import { alertTheme } from "./theme";

export interface AlertTheme {
  base: string;
  borderAccent: string;
  closeButton: AlertCloseButtonTheme;
  color: FlowbiteColors;
  icon: string;
  rounded: string;
  wrapper: string;
}

export interface AlertCloseButtonTheme {
  base: string;
  color: FlowbiteColors;
  icon: string;
}

export interface AlertProps extends Omit<ComponentProps<"div">, "color">, ThemingProps<AlertTheme> {
  additionalContent?: ReactNode;
  color?: DynamicStringEnumKeysOf<FlowbiteColors>;
  icon?: FC<ComponentProps<"svg">>;
  onDismiss?: boolean | (() => void);
  rounded?: boolean;
  withBorderAccent?: boolean;
}

export const Alert: FC<AlertProps> = ({
  additionalContent,
  children,
  className,
  color = "info",
  icon: Icon,
  onDismiss,
  rounded = true,
  theme: customTheme,
  resetTheme,
  withBorderAccent,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([alertTheme, provider.theme?.alert, customTheme], [resetTheme]);

  return (
    <div
      className={twMerge(
        theme.base,
        theme.color[color],
        rounded && theme.rounded,
        withBorderAccent && theme.borderAccent,
        className,
      )}
      role="alert"
      {...props}
    >
      <div className={theme.wrapper} data-testid="flowbite-alert-wrapper">
        {Icon && <Icon className={theme.icon} data-testid="flowbite-alert-icon" />}
        <div>{children}</div>
        {typeof onDismiss === "function" && (
          <button
            aria-label="Dismiss"
            className={twMerge(theme.closeButton.base, theme.closeButton.color[color])}
            onClick={onDismiss}
            type="button"
          >
            <HiX aria-hidden className={theme.closeButton.icon} />
          </button>
        )}
      </div>
      {additionalContent && <div>{additionalContent}</div>}
    </div>
  );
};

Alert.displayName = "Alert";
