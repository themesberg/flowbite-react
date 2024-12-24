"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, Unstyled } from "../../types";
import { useAccordionContext } from "./AccordionPanelContext";
import { accordionTheme } from "./theme";

export interface FlowbiteAccordionComponentTheme {
  base: string;
}

export interface AccordionContentProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteAccordionComponentTheme>;
  unstyled?: Unstyled<FlowbiteAccordionComponentTheme>;
}

export const AccordionContent: FC<AccordionContentProps> = ({
  children,
  className,
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const { isOpen } = useAccordionContext();

  const provider = useThemeProvider();
  const theme = resolveTheme([accordionTheme.content, provider.theme?.accordion?.content, customTheme], [unstyled]);

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
