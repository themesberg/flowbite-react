import { Children, cloneElement, ComponentProps, FC, PropsWithChildren, ReactElement, useMemo, useState } from 'react';
import { AccordionPanelContext } from './AccordionPanelContext';

export type AccordionPanelProps = PropsWithChildren<{
  open?: boolean;
  flush?: boolean;
}>;

export const AccordionPanel: FC<AccordionPanelProps> = ({ children, open, flush }) => {
  const [isOpen, setIsOpen] = useState(open);
  const items = useMemo(
    () => Children.map(children as ReactElement<ComponentProps<'div' | 'button'>>[], (child) => cloneElement(child)),
    [children],
  );

  return <AccordionPanelContext.Provider value={{ flush, isOpen, setIsOpen }}>{items}</AccordionPanelContext.Provider>;
};
