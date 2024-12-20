"use client";

import { createContext, useContext } from "react";
import type { DeepPartial, Unstyled } from "../../types";
import type { FlowbiteToastTheme } from "./Toast";

export type Duration = 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000;

type ToastContext = {
  theme?: DeepPartial<FlowbiteToastTheme>;
  unstyled?: Unstyled<FlowbiteToastTheme>;
  duration?: Duration;
  isClosed?: boolean;
  isRemoved?: boolean;
  setIsClosed: (isClosed: boolean) => void;
  setIsRemoved: (isRemoved: boolean) => void;
};

export const ToastContext = createContext<ToastContext | undefined>(undefined);

export function useToastContext(): ToastContext {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToastContext should be used within the ToastContext provider!");
  }

  return context;
}
