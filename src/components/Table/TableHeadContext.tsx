'use client';

import { createContext, useContext } from 'react';
import type { FlowbiteTableHeadTheme } from './TableHead';

export type TableHeadContext = {
  theme: FlowbiteTableHeadTheme;
};

export const TableHeadContext = createContext<TableHeadContext | undefined>(undefined);

export function useTableHeadContext(): TableHeadContext {
  const context = useContext(TableHeadContext);

  if (!context) {
    throw new Error('useTableHeadContext should be used within the TableHeadContext provider!');
  }

  return context;
}
