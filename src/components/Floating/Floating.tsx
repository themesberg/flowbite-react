import type { Placement } from '@floating-ui/core';
import {
  autoUpdate,
  safePolygon,
  useClick,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { getArrowPlacement, getMiddleware, getPlacement } from '../../helpers/floating';

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

export interface FloatingProps extends PropsWithChildren, Omit<ComponentProps<'div'>, 'content' | 'style'> {
  animation?: false | `duration-${number}`;
  arrow?: boolean;
  closeRequestKey?: string;
  content: ReactNode;
  placement?: 'auto' | Placement;
  style?: 'dark' | 'light' | 'auto';
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
  closeRequestKey,
  content,
  placement = 'top',
  style = 'dark',
  theme,
  trigger = 'hover',
  minWidth,
  ...props
}) => {
  const arrowRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const floatingTooltip = useFloating<HTMLElement>({
    middleware: getMiddleware({ arrowRef, placement }),
    onOpenChange: setOpen,
    open,
    placement: getPlacement({ placement }),
  });

  const {
    context,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    refs,
    strategy,
    update,
    x,
    y,
  } = floatingTooltip;

  const { getFloatingProps, getReferenceProps } = useInteractions([
    useClick(context, { enabled: trigger === 'click' }),
    useFocus(context),
    useHover(context, {
      enabled: trigger === 'hover',
      handleClose: safePolygon(),
    }),
    useRole(context, { role: 'tooltip' }),
  ]);

  useEffect(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [open, refs.floating, refs.reference, update]);

  useEffect(() => {
    if (closeRequestKey !== undefined) setOpen(false);
  }, [closeRequestKey]);

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
              [getArrowPlacement({ placement: floatingTooltip.placement })]: theme.arrow.placement,
            }}
          >
            &nbsp;
          </div>
        )}
      </div>
    </>
  );
};
