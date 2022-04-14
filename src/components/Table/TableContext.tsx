import { createContext, useContext } from 'react';

export type TableContext = {
  striped?: boolean;
  hoverable?: boolean;
};

export const TableContext = createContext<TableContext | undefined>(undefined);

export function useTableContext(): TableContext {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error('useTableContext should be used within the TableContext provider!');
  }

  return context;
}
