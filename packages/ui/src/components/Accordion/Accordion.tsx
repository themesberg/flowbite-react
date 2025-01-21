"use client";

import type { ComponentProps, FC, ReactElement } from "react";
import { Children, cloneElement, useMemo, useState } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { ChevronDownIcon } from "../../icons";
import { useThemeProvider } from "../../theme/provider";
import type { FlowbiteBoolean, ThemingProps } from "../../types";
import type { AccordionComponentTheme } from "./AccordionContent";
import type { AccordionPanelProps } from "./AccordionPanel";
import type { AccordionTitleTheme } from "./AccordionTitle";
import { accordionTheme } from "./theme";

export interface AccordionTheme {
  root: AccordionRootTheme;
  content: AccordionComponentTheme;
  title: AccordionTitleTheme;
}

export interface AccordionRootTheme {
  base: string;
  flush: FlowbiteBoolean;
}

export interface AccordionProps extends ComponentProps<"div">, ThemingProps<AccordionTheme> {
  alwaysOpen?: boolean;
  arrowIcon?: FC<ComponentProps<"svg">>;
  children: ReactElement<AccordionPanelProps> | ReactElement<AccordionPanelProps>[];
  flush?: boolean;
  collapseAll?: boolean;
}

export function Accordion({
  alwaysOpen = false,
  arrowIcon = ChevronDownIcon,
  children,
  flush = false,
  collapseAll = false,
  className,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: AccordionProps) {
  const [isOpen, setOpen] = useState(collapseAll ? -1 : 0);

  const panels = useMemo(
    () =>
      Children.map(children, (child, i) =>
        cloneElement(child, {
          alwaysOpen,
          arrowIcon,
          flush,
          isOpen: isOpen === i,
          setOpen: () => setOpen(isOpen === i ? -1 : i),
        }),
      ),
    [alwaysOpen, arrowIcon, children, flush, isOpen],
  );

  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [accordionTheme.root, provider.theme?.accordion?.root, customTheme],
    [get(provider.clearTheme, "accordion.root"), clearTheme],
    [get(provider.applyTheme, "accordion.root"), applyTheme],
  );

  return (
    <div
      className={twMerge(theme.base, theme.flush[flush ? "on" : "off"], className)}
      data-testid="flowbite-accordion"
      {...props}
    >
      {panels}
    </div>
  );
}

Accordion.displayName = "Accordion";
