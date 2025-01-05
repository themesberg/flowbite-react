"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { useAccordionContext } from "./AccordionPanelContext";
import { accordionTheme } from "./theme";

export interface AccordionComponentTheme {
  base: string;
}

export interface AccordionContentProps extends ComponentProps<"div">, ThemingProps<AccordionComponentTheme> {}

export const AccordionContent: FC<AccordionContentProps> = ({
  children,
  className,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}) => {
  const { isOpen } = useAccordionContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
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
};

AccordionContent.displayName = "AccordionContent";
