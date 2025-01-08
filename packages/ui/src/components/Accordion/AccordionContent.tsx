"use client";

import type { ComponentProps } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { useAccordionContext } from "./AccordionPanelContext";
import { accordionTheme } from "./theme";

export interface AccordionComponentTheme {
  base: string;
}

export interface AccordionContentProps extends ComponentProps<"div">, ThemingProps<AccordionComponentTheme> {}

export function AccordionContent({
  children,
  className,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: AccordionContentProps) {
  const { isOpen } = useAccordionContext();

  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [accordionTheme.content, provider.theme?.accordion?.content, customTheme],
    [get(provider.clearTheme, "accordion.content"), clearTheme],
    [get(provider.applyTheme, "accordion.content"), applyTheme],
  );

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
}

AccordionContent.displayName = "AccordionContent";
