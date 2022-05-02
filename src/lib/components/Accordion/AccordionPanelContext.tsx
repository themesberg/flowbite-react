import { createContext, useContext } from 'react';

type AccordionPanelContext = {
  flush?: boolean;
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const AccordionPanelContext = createContext<AccordionPanelContext | undefined>(undefined);

export function useAccordionContext(): AccordionPanelContext {
  const context = useContext(AccordionPanelContext);

  if (!context) {
    throw new Error('useAccordionContext should be used within the AccordionPanelContext provider!');
  }

  return context;
}
