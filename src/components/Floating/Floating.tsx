'use client';

import type { Placement } from '@floating-ui/core';
import { autoUpdate, useFocus } from '@floating-ui/react';
import type { ComponentProps, FC, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useBaseFLoating, useFloatingInteractions } from '../../hooks/use-floating';
import { getArrowPlacement } from './helpers';

export interface FlowbiteFloatingTheme {
  arrow: FlowbiteFloatingArrowTheme;
  animation: string;
  base: string;
  content: string;
  hidden: string;
  style: {
    auto: string;
    dark: string;
    light: string;
  };
  target: string;
}

export interface FlowbiteFloatingArrowTheme {
  base: string;
  placement: string;
  style: {
    dark: string;
    light: string;
    auto: string;
  };
}

export type FloatingStyle = 'dark' | 'light' | 'auto';

export interface FloatingProps extends Omit<ComponentProps<'div'>, 'content' | 'style'> {
  animation?: false | `duration-${number}`;
  arrow?: boolean;
  content: ReactNode;
  delay?: number | Partial<{ open: number; close: number }>;
  placement?: 'auto' | Placement;
  restMs?: number;
  style?: FloatingStyle;
  theme: FlowbiteFloatingTheme;
  trigger?: 'hover' | 'click';
  minWidth?: number;
}

/**
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
export const Floating: FC<FloatingProps> = ({
  animation = 'duration-300',
  arrow = true,
  children,
  className,
  content,
  delay,
  restMs,
  placement = 'top',
  style = 'dark',
  theme,
  trigger = 'hover',
  minWidth,
  ...props
}) => {
  const arrowRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const floatingProperties = useBaseFLoating({
    open,
    placement,
    arrowRef,
    setOpen,
  });

  const {
    context,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    refs,
    strategy,
    update,
    x,
    y,
  } = floatingProperties;

  const focus = useFocus(context);
  const { getFloatingProps, getReferenceProps } = useFloatingInteractions({
    context,
    delay,
    restMs,
    role: 'tooltip',
    trigger,
    interactions: [focus],
  });

  useEffect(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [open, refs.floating, refs.reference, update]);

  return (
    <>
      <div
        ref={refs.setReference}
        className={theme.target}
        data-testid="flowbite-tooltip-target"
        {...getReferenceProps()}
      >
        {children}
      </div>
      <div
        ref={refs.setFloating}
        data-testid="flowbite-tooltip"
        {...getFloatingProps({
          className: twMerge(
            theme.base,
            animation && `${theme.animation} ${animation}`,
            !open && theme.hidden,
            theme.style[style],
            className,
          ),
          style: {
            position: strategy,
            top: y ?? ' ',
            left: x ?? ' ',
            minWidth,
          },
          ...props,
        })}
      >
        <div className={theme.content}>{content}</div>
        {arrow && (
          <div
            className={twMerge(
              theme.arrow.base,
              style === 'dark' && theme.arrow.style.dark,
              style === 'light' && theme.arrow.style.light,
              style === 'auto' && theme.arrow.style.auto,
            )}
            data-testid="flowbite-tooltip-arrow"
            ref={arrowRef}
            style={{
              top: arrowY ?? ' ',
              left: arrowX ?? ' ',
              right: ' ',
              bottom: ' ',
              [getArrowPlacement({ placement: floatingProperties.placement })]: theme.arrow.placement,
            }}
          >
            &nbsp;
          </div>
        )}
      </div>
    </>
  );
};
