"use client";

import { createContext, useContext } from "react";
import type { DeepPartial, ResetTheme } from "../../types";
import type { TableHeadTheme } from "./TableHead";

export type TableHeadContext = {
  theme?: DeepPartial<TableHeadTheme>;
  resetTheme?: ResetTheme<TableHeadTheme>;
};

export const TableHeadContext = createContext<TableHeadContext | undefined>(undefined);

export function useTableHeadContext(): TableHeadContext {
  const context = useContext(TableHeadContext);

  if (!context) {
    throw new Error("useTableHeadContext should be used within the TableHeadContext provider!");
  }

  return context;
}
