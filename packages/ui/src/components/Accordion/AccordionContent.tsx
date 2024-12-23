"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
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

  const theme = resolveTheme([accordionTheme.content, getTheme()?.accordion?.content, customTheme]);

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
