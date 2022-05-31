import { createContext, useContext } from 'react';

export type SidebarItemContext = {
  isInsideCollapse: boolean;
};

export const SidebarItemContext = createContext<SidebarItemContext | undefined>(undefined);

export function useSidebarItemContext(): SidebarItemContext {
  const context = useContext(SidebarItemContext);

  if (!context) {
    throw new Error('useSidebarItemContext should be used within the SidebarItemContext provider!');
  }

  return context;
}
