"use client";

import type { ComponentProps } from "react";
import { useLayoutEffect, useRef, useState } from "react";
import { get } from "../../helpers/get";
import { resolveProps } from "../../helpers/resolve-props";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { useAccordionContext } from "./AccordionPanelContext";
import { accordionTheme } from "./theme";

export interface AccordionContentTheme {
  base: string;
}

export interface AccordionContentProps extends ComponentProps<"div">, ThemingProps<AccordionContentTheme> {}

export function AccordionContent(props: AccordionContentProps) {
  const { isOpen, animate = false, animationDuration = 300 } = useAccordionContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (!animate || !isOpen) return;
    const el = contentRef.current;
    if (el) setHeight(el.scrollHeight);
  }, [animate, isOpen]);

  /** When closed, set inert on the wrapper so descendants are not focusable. */
  useLayoutEffect(() => {
    if (!animate) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    if (isOpen) {
      wrapper.removeAttribute("inert");
    } else {
      wrapper.setAttribute("inert", "");
    }
  }, [animate, isOpen]);

  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [accordionTheme.content, provider.theme?.accordion?.content, props.theme],
    [get(provider.clearTheme, "accordion.content"), props.clearTheme],
    [get(provider.applyTheme, "accordion.content"), props.applyTheme],
  );

  const { className, ...restProps } = resolveProps(props, provider.props?.accordionContent);

  const handleTransitionEnd = () => {
    if (!isOpen) setHeight(0);
  };

  return !animate ? (
    <div
      className={twMerge(theme.base, className)}
      data-testid="flowbite-accordion-content"
      hidden={!isOpen}
      {...restProps}
    />
  ) : (
    <div
      ref={wrapperRef}
      data-testid="flowbite-accordion-content"
      aria-hidden={!isOpen}
      style={{
        overflow: "hidden",
        maxHeight: isOpen ? height : 0,
        transition: `max-height ${animationDuration}ms ease-out`,
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      <div ref={contentRef} className={twMerge(theme.base, className)} {...restProps} />
    </div>
  );
}

AccordionContent.displayName = "AccordionContent";
