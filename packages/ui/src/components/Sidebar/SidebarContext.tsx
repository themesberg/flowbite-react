"use client";

import { createContext, useContext } from "react";
import type { DeepPartial, Unstyled } from "../../types";
import type { FlowbiteSidebarTheme } from "./Sidebar";

export type SidebarContext = {
  theme?: DeepPartial<FlowbiteSidebarTheme>;
  unstyled?: Unstyled<FlowbiteSidebarTheme>;
  isCollapsed: boolean;
};

export const SidebarContext = createContext<SidebarContext | undefined>(undefined);

export function useSidebarContext(): SidebarContext {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebarContext should be used within the SidebarContext provider!");
  }

  return context;
}
