import { createContext, useContext } from 'react';
import type { AccordionPanelProps } from './AccordionPanel';

type AccordionPanelContext = Omit<AccordionPanelProps, 'children'>;

export const AccordionPanelContext = createContext<AccordionPanelContext | undefined>(undefined);

export function useAccordionContext(): AccordionPanelContext {
  const context = useContext(AccordionPanelContext);

  if (!context) {
    throw new Error('useAccordionContext should be used within the AccordionPanelContext provider!');
  }

  return context;
}
