"use client";

import type { useInteractions } from "@floating-ui/react";
import { createContext, useContext } from "react";
import type { DeepPartial, ResetTheme } from "../../types";
import type { DropdownTheme } from "./Dropdown";

type DropdownContext = {
  theme?: DeepPartial<DropdownTheme>;
  resetTheme?: ResetTheme<DropdownTheme>;
  activeIndex: number | null;
  dismissOnClick?: boolean;
  getItemProps: ReturnType<typeof useInteractions>["getItemProps"];
  handleSelect: (index: number | null) => void;
};

export const DropdownContext = createContext<DropdownContext | undefined>(undefined);

export function useDropdownContext(): DropdownContext {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error("useDropdownContext should be used within the DropdownContext provider!");
  }

  return context;
}
