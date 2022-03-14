import { Children, cloneElement, ComponentProps, FC, ReactElement, useMemo, useState } from 'react';
import classNames from 'classnames';

import { AccordionPanelContext } from './AccordionPanelContext';

export type AccordionPanelProps = {
  open?: boolean;
  flush?: boolean;
};

export const AccordionPanel: FC<AccordionPanelProps> = ({ children, open, flush }) => {
  const [isOpen, setIsOpen] = useState(open);
  const items = useMemo(
    () =>
      Children.map(children as ReactElement<ComponentProps<'div' | 'button'>>[], (child) =>
        cloneElement(child, {
          className: classNames(child.props.className, { 'px-5 first:rounded-t-lg last:rounded-b-lg': !flush }),
        }),
      ),
    [children, flush],
  );

  return <AccordionPanelContext.Provider value={{ flush, isOpen, setIsOpen }}>{items}</AccordionPanelContext.Provider>;
};

AccordionPanel.displayName = 'Accordion.Panel';
