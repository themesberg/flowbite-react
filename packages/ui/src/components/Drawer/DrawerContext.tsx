"use client";

import { createContext, useContext } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteDrawerTheme } from "./Drawer";

interface DrawerContext {
  id?: string;
  isOpen?: boolean;
  onClose?: () => void;
  theme?: DeepPartial<FlowbiteDrawerTheme>;
}

export const DrawerContext = createContext<DrawerContext | undefined>(undefined);

export function useDrawerContext(): DrawerContext {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error("useDrawerContext should be used within the DrawerContext provider!");
  }

  return context;
}
