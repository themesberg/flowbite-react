import { createContext, useContext } from 'react';

export type SidebarContext = {
  isCollapsed: boolean;
};

export const SidebarContext = createContext<SidebarContext | undefined>(undefined);

export function useSidebarContext(): SidebarContext {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('useSidebarContext should be used within the SidebarContext provider!');
  }

  return context;
}
