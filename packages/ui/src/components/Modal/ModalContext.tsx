"use client";

import { createContext, useContext } from "react";
import type { DeepPartial, ResetTheme } from "../../types";
import type { ModalTheme } from "./Modal";

type ModalContext = {
  theme?: DeepPartial<ModalTheme>;
  resetTheme?: ResetTheme<ModalTheme>;
  popup?: boolean;
  setHeaderId: (id: string | undefined) => void;
  onClose?: () => void;
};

export const ModalContext = createContext<ModalContext | undefined>(undefined);

export function useModalContext(): ModalContext {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModalContext should be used within the ModalContext provider!");
  }

  return context;
}
