import { createContext, useContext } from 'react';

type DrawerContext = {
  onClose?: () => void;
};

export const DrawerContext = createContext<DrawerContext | undefined>(undefined);

export function useDrawerContext(): DrawerContext {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error('useDrawerContext should be used within the DrawerContext provider!');
  }

  return context;
}
