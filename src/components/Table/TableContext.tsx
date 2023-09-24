'use client';

import { createContext, useContext } from 'react';

export type TableContextType = {
  striped?: boolean;
  hoverable?: boolean;
};

export const TableContext = createContext<TableContextType | undefined>(undefined);

// TODO: deprecate this in favor for vanilla CSS class targetting and enable full SSR
export function useTableContext(): TableContextType {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error('useTableContext should be used within the TableContext provider!');
  }

  return context;
}
