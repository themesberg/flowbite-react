"use client";

import type { ComponentProps, FC } from "react";
import { useState } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import { toastTheme } from "./theme";
import type { Duration } from "./ToastContext";
import { ToastContext } from "./ToastContext";
import { ToastToggle } from "./ToastToggle";

export interface ToastTheme {
  root: {
    base: string;
    closed: string;
  };
  toggle: {
    base: string;
    icon: string;
  };
}

export interface ToastProps extends ComponentProps<"div"> {
  duration?: Duration;
  theme?: DeepPartial<ToastTheme>;
  resetTheme?: ResetTheme<ToastTheme>;
}

const durationClasses: Record<Duration, string> = {
  75: "duration-75",
  100: "duration-100",
  150: "duration-150",
  200: "duration-200",
  300: "duration-300",
  500: "duration-500",
  700: "duration-700",
  1000: "duration-1000",
};

const ToastComponent: FC<ToastProps> = ({
  children,
  className,
  duration = 300,
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const [isClosed, setIsClosed] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const provider = useThemeProvider();
  const theme = resolveTheme([toastTheme, provider.theme?.toast, customTheme], [resetTheme]);

  if (isRemoved) {
    return null;
  }

  return (
    <ToastContext.Provider
      value={{ theme: customTheme, resetTheme, duration, isClosed, isRemoved, setIsClosed, setIsRemoved }}
    >
      <div
        data-testid="flowbite-toast"
        role="alert"
        className={twMerge(theme.root.base, durationClasses[duration], isClosed && theme.root.closed, className)}
        {...props}
      >
        {children}
      </div>
    </ToastContext.Provider>
  );
};

ToastComponent.displayName = "Toast";
ToastToggle.displayName = "Toast.Toggle";

export const Toast = Object.assign(ToastComponent, {
  Toggle: ToastToggle,
});
