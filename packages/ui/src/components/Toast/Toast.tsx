"use client";

import type { ComponentProps, FC } from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { Duration } from "./ToastContext";
import { ToastContext } from "./ToastContext";
import { ToastToggle } from "./ToastToggle";

export interface FlowbiteToastTheme {
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
  theme?: DeepPartial<FlowbiteToastTheme>;
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

const ToastComponent: FC<ToastProps> = ({ children, className, duration = 300, theme: customTheme = {}, ...props }) => {
  const [isClosed, setIsClosed] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const theme = mergeDeep(getTheme().toast, customTheme);

  if (isRemoved) {
    return null;
  }

  return (
    <ToastContext.Provider value={{ theme, duration, isClosed, isRemoved, setIsClosed, setIsRemoved }}>
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
