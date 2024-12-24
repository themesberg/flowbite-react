"use client";

import type { ComponentProps, FC, ReactElement } from "react";
import { Children, cloneElement, useMemo, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
import type { AccordionComponentTheme } from "./AccordionContent";
import { AccordionContent } from "./AccordionContent";
import type { AccordionPanelProps } from "./AccordionPanel";
import { AccordionPanel } from "./AccordionPanel";
import type { AccordionTitleTheme } from "./AccordionTitle";
import { AccordionTitle } from "./AccordionTitle";
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

export interface AccordionProps extends ComponentProps<"div"> {
  alwaysOpen?: boolean;
  arrowIcon?: FC<ComponentProps<"svg">>;
  children: ReactElement<AccordionPanelProps> | ReactElement<AccordionPanelProps>[];
  flush?: boolean;
  collapseAll?: boolean;
  theme?: DeepPartial<AccordionTheme>;
  resetTheme?: ResetTheme<AccordionTheme>;
}

const AccordionComponent: FC<AccordionProps> = ({
  alwaysOpen = false,
  arrowIcon = HiChevronDown,
  children,
  flush = false,
  collapseAll = false,
  className,
  theme: customTheme,
  resetTheme,
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
    [get(provider.resetTheme, "accordion.root"), get(resetTheme, "root")],
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

AccordionComponent.displayName = "Accordion";
AccordionPanel.displayName = "Accordion.Panel";
AccordionTitle.displayName = "Accordion.Title";
AccordionContent.displayName = "Accordion.Content";

export const Accordion = Object.assign(AccordionComponent, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent,
});
