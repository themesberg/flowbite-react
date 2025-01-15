"use client";

import type { ComponentProps } from "react";
import { useState } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { toastTheme } from "./theme";
import { ToastContext } from "./ToastContext";

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

export type ToastDuration = 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000;

export interface ToastProps extends ComponentProps<"div">, ThemingProps<ToastTheme> {
  duration?: ToastDuration;
}

const durationClasses: Record<ToastDuration, string> = {
  75: "duration-75",
  100: "duration-100",
  150: "duration-150",
  200: "duration-200",
  300: "duration-300",
  500: "duration-500",
  700: "duration-700",
  1000: "duration-1000",
};

export function Toast({
  children,
  className,
  duration = 300,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: ToastProps) {
  const [isClosed, setIsClosed] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [toastTheme, provider.theme?.toast, customTheme],
    [get(provider.clearTheme, "toast"), clearTheme],
    [get(provider.applyTheme, "toast"), applyTheme],
  );

  if (isRemoved) {
    return null;
  }

  return (
    <ToastContext.Provider
      value={{
        theme: customTheme,
        clearTheme,
        applyTheme,
        duration,
        isClosed,
        isRemoved,
        setIsClosed,
        setIsRemoved,
      }}
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
}

Toast.displayName = "Toast";
