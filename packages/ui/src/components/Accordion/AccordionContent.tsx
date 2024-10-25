"use client";

import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { resolveTheme } from "../../helpers/resolve-theme";
import { getStore } from "../../store";
import type { DeepPartial } from "../../types";
import { useAccordionContext } from "./AccordionPanelContext";
import { accordionTheme } from "./theme";

export interface FlowbiteAccordionComponentTheme {
  base: string;
}

export interface AccordionContentProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteAccordionComponentTheme>;
}

export const AccordionContent: FC<AccordionContentProps> = ({ children, className, theme: customTheme, ...props }) => {
  const { isOpen } = useAccordionContext();

  const theme = resolveTheme([accordionTheme.content, getStore().theme?.accordion?.content, customTheme]);

  return (
    <div
      className={twMerge(theme.base, className)}
      data-testid="flowbite-accordion-content"
      hidden={!isOpen}
      {...props}
    >
      {children}
    </div>
  );
};
