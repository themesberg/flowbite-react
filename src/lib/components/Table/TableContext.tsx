import { createContext, useContext } from 'react';

export type TableContextType = {
  striped?: boolean;
  hoverable?: boolean;
};

export const TableContext = createContext<TableContextType | undefined>(undefined);

export function useTableContext(): TableContextType {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error('useTableContext should be used within the TableContext provider!');
  }

  return context;
}
