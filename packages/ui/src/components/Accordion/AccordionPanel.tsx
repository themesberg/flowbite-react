"use client";

import type { FC } from "react";
import { useState } from "react";
import type { AccordionProps } from "./Accordion";
import { AccordionPanelContext } from "./AccordionPanelContext";

export interface AccordionPanelProps extends AccordionProps {
  isOpen?: boolean;
  setOpen?: () => void;
}

export const AccordionPanel: FC<AccordionPanelProps> = ({ children, ...props }) => {
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
