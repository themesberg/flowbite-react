import type { Placement } from '@floating-ui/core';
import { arrow, autoPlacement, shift } from '@floating-ui/core';
import type { Middleware } from '@floating-ui/react-dom-interactions';
import {
  autoUpdate,
  flip,
  offset,
  useClick,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions';
import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren, ReactNode, RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';

export interface TooltipProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className' | 'style'>> {
  content: ReactNode;
  placement?: 'auto' | Placement;
  trigger?: 'hover' | 'click';
  style?: 'dark' | 'light' | 'auto';
  animation?: false | `duration-${number}`;
  arrow?: boolean;
}

/**
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
export const Tooltip: FC<TooltipProps> = ({
  animation = 'duration-300',
  arrow = true,
  children,
  content,
  placement = 'top',
  style = 'dark',
  trigger = 'hover',
  ...props
}) => {
  const theme = useTheme().theme.tooltip;
  const theirProps = excludeClassName(props);

  const arrowRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const floatingTooltip = useFloating<HTMLElement>({
    middleware: floatingMiddleware({ arrowRef, placement }),
    onOpenChange: setOpen,
    open,
    placement: floatingPlacement({ placement }),
  });
  const {
    context,
    floating,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    reference,
    refs,
    strategy,
    update,
    x,
    y,
  } = floatingTooltip;

  const { getFloatingProps, getReferenceProps } = useInteractions([
    useClick(context, { enabled: trigger === 'click' }),
    useFocus(context),
    useHover(context, { enabled: trigger === 'hover' }),
    useRole(context, { role: 'tooltip' }),
  ]);

  useEffect(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [open, refs.floating, refs.reference, update]);

  return (
    <>
      <div className={theme.target} {...getReferenceProps({ ref: reference })} data-testid="tooltip-target">
        {children}
      </div>
      <div
        data-testid="tooltip"
        {...getFloatingProps({
          className: classNames(
            theme.base,
            animation && `${theme.animation} ${animation}`,
            !open && theme.hidden,
            theme.style[style],
          ),
          ref: floating,
          style: {
            position: strategy,
            top: y ?? ' ',
            left: x ?? ' ',
          },
          ...theirProps,
        })}
      >
        <div className={theme.content}>{content}</div>
        {arrow && (
          <div
            className={classNames(theme.arrow.base, {
              [theme.arrow.style.dark]: style === 'dark',
              [theme.arrow.style.light]: style === 'light',
              [theme.arrow.style.auto]: style === 'auto',
            })}
            data-testid="tooltip-arrow"
            ref={arrowRef}
            style={{
              top: arrowY ?? ' ',
              left: arrowX ?? ' ',
              right: ' ',
              bottom: ' ',
              [floatingArrowPlacement({ placement: floatingTooltip.placement })]: theme.arrow.placement,
            }}
          >
            &nbsp;
          </div>
        )}
      </div>
    </>
  );
};

/**
 * @see https://floating-ui.com/docs/middleware
 */
const floatingMiddleware = ({
  arrowRef,
  placement,
}: {
  arrowRef: RefObject<HTMLDivElement>;
  placement: 'auto' | Placement;
}): Middleware[] => {
  const middleware = [];

  middleware.push(offset(8));
  middleware.push(placement === 'auto' ? autoPlacement() : flip());
  middleware.push(shift({ padding: 8 }));

  if (arrowRef.current) {
    middleware.push(arrow({ element: arrowRef.current }));
  }

  return middleware;
};

const floatingPlacement = ({ placement }: { placement: 'auto' | Placement }): Placement | undefined => {
  return placement === 'auto' ? undefined : placement;
};

const floatingArrowPlacement = ({ placement }: { placement: Placement }): Placement => {
  return {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[placement.split('-')[0]] as Placement;
};
