import { FC, PropsWithChildren, useState } from 'react';
import { AccordionProps } from '.';
import { AccordionPanelContext } from './AccordionPanelContext';

export interface AccordionPanelProps extends PropsWithChildren<AccordionProps> {
  open?: boolean;
  setOpen?: () => void;
}

export const AccordionPanel: FC<AccordionPanelProps> = ({ children, ...props }): JSX.Element => {
  const { alwaysOpen } = props;
  const [open, setOpen] = useState(props.open);

  const provider = alwaysOpen
    ? {
        ...props,
        open,
        setOpen: () => setOpen(!open),
      }
    : props;

  return <AccordionPanelContext.Provider value={provider}>{children}</AccordionPanelContext.Provider>;
};
