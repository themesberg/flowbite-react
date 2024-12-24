"use client";

import { createContext, useContext } from "react";
import type { DeepPartial, ResetTheme } from "../../types";
import type { TableBodyTheme } from "./TableBody";

export type TableBodyContext = {
  theme?: DeepPartial<TableBodyTheme>;
  resetTheme?: ResetTheme<TableBodyTheme>;
};

export const TableBodyContext = createContext<TableBodyContext | undefined>(undefined);

export function useTableBodyContext(): TableBodyContext {
  const context = useContext(TableBodyContext);

  if (!context) {
    throw new Error("useTableBodyContext should be used within the TableBodyContext provider!");
  }

  return context;
}
