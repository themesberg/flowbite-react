"use client";

import type { ComponentProps, FC, ReactElement } from "react";
import { Children, cloneElement, useMemo, useState } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { ChevronDownIcon } from "../../icons";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
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

export const Accordion: FC<AccordionProps> = ({
  alwaysOpen = false,
  arrowIcon = ChevronDownIcon,
  children,
  flush = false,
  collapseAll = false,
  className,
  theme: customTheme,
  resetTheme,
  applyTheme,
  ...props
}) => {
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
  const theme = resolveTheme(
    [accordionTheme.root, provider.theme?.accordion?.root, customTheme],
    [get(provider.resetTheme, "accordion.root"), resetTheme],
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
};

Accordion.displayName = "Accordion";
