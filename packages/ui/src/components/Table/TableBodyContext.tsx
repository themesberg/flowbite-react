'use client';

import { createContext, useContext } from 'react';
import type { FlowbiteTableBodyTheme } from './TableBody';

export type TableBodyContext = {
  theme: FlowbiteTableBodyTheme;
};

export const TableBodyContext = createContext<TableBodyContext | undefined>(undefined);

export function useTableBodyContext(): TableBodyContext {
  const context = useContext(TableBodyContext);

  if (!context) {
    throw new Error('useTableBodyContext should be used within the TableBodyContext provider!');
  }

  return context;
}
