import type { FC, PropsWithChildren } from 'react';
import { useState } from 'react';
import type { AccordionProps } from '.';
import { AccordionPanelContext } from './AccordionPanelContext';

export interface AccordionPanelProps extends PropsWithChildren<AccordionProps> {
  isOpen?: boolean;
  setOpen?: () => void;
}

export const AccordionPanel: FC<AccordionPanelProps> = ({ children, ...props }): JSX.Element => {
  const { alwaysOpen } = props;
  const [isOpen, setOpen] = useState(props.isOpen);

  const provider = alwaysOpen
    ? {
        ...props,
        isOpen,
        setOpen: () => setOpen(!isOpen),
      }
    : props;

  return <AccordionPanelContext.Provider value={provider}>{children}</AccordionPanelContext.Provider>;
};
