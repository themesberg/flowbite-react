"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { FlowbiteBoolean, FlowbiteHeadingLevel } from "../Flowbite/FlowbiteTheme";
import { useAccordionContext } from "./AccordionPanelContext";
import { accordionTheme } from "./theme";

export interface AccordionTitleTheme {
  arrow: {
    base: string;
    open: FlowbiteBoolean;
  };
  base: string;
  flush: FlowbiteBoolean;
  heading: string;
  open: FlowbiteBoolean;
}

export interface AccordionTitleProps extends ComponentProps<"button">, ThemingProps<AccordionTitleTheme> {
  arrowIcon?: FC<ComponentProps<"svg">>;
  as?: FlowbiteHeadingLevel;
}

export const AccordionTitle: FC<AccordionTitleProps> = ({
  as: Heading = "h2",
  children,
  className,
  theme: customTheme,
  resetTheme,
  applyTheme,
  ...props
}) => {
  const { arrowIcon: ArrowIcon, flush, isOpen, setOpen } = useAccordionContext();
  const onClick = () => typeof setOpen !== "undefined" && setOpen();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [accordionTheme.title, provider.theme?.accordion?.title, customTheme],
    [get(provider.resetTheme, "accordion.title"), resetTheme],
    [get(provider.applyTheme, "accordion.title"), applyTheme],
  );

  return (
    <button
      className={twMerge(theme.base, theme.flush[flush ? "on" : "off"], theme.open[isOpen ? "on" : "off"], className)}
      onClick={onClick}
      type="button"
      {...props}
    >
      <Heading className={theme.heading} data-testid="flowbite-accordion-heading">
        {children}
      </Heading>
      {ArrowIcon && (
        <ArrowIcon
          aria-hidden
          className={twMerge(theme.arrow.base, theme.arrow.open[isOpen ? "on" : "off"])}
          data-testid="flowbite-accordion-arrow"
        />
      )}
    </button>
  );
};

AccordionTitle.displayName = "AccordionTitle";
