'use client';

import type { ComponentProps, ComponentPropsWithRef, Dispatch, ReactNode, SetStateAction } from 'react';
import { cloneElement, isValidElement, useMemo, useRef, useState } from 'react';
import type { Placement } from '@floating-ui/react';
import { FloatingFocusManager, useMergeRefs } from '@floating-ui/react';
import type { DeepPartial } from '../../types';
import type { FlowbiteFloatingArrowTheme } from '../Floating';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import { useBaseFLoating, useFloatingInteractions } from '../../hooks/use-floating';
import { getArrowPlacement } from '../Floating/helpers';

export interface FlowbitePopoverTheme {
  arrow: Omit<FlowbiteFloatingArrowTheme, 'style'>;
  base: string;
  content: string;
}

export interface PopoverProps extends Omit<ComponentProps<'div'>, 'content' | 'style'> {
  arrow?: boolean;
  content: ReactNode;
  placement?: 'auto' | Placement;
  theme?: DeepPartial<FlowbitePopoverTheme>;
  trigger?: 'hover' | 'click';
  initialOpen?: boolean;
  open?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>;
}

export function Popover({
  children,
  content,
  theme: customTheme = {},
  arrow = true,
  trigger = 'click',
  initialOpen,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  placement: theirPlacement = 'bottom',
  ...props
}: PopoverProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState<boolean>(Boolean(initialOpen));
  const arrowRef = useRef<HTMLDivElement>(null);

  const theme = mergeDeep(getTheme().popover, customTheme);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const floatingProps = useBaseFLoating({
    open,
    placement: theirPlacement,
    arrowRef,
    setOpen,
  });

  const {
    floatingStyles,
    context,
    placement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    refs,
  } = floatingProps;

  const { getFloatingProps, getReferenceProps } = useFloatingInteractions({
    context,
    role: 'dialog',
    trigger,
  });

  const childrenRef = (children as ComponentPropsWithRef<'button'>).ref;
  const ref = useMergeRefs([context.refs.setReference, childrenRef]);

  if (!isValidElement(children)) {
    throw Error('Invalid target element');
  }

  const target = useMemo(() => {
    return cloneElement(
      children,
      getReferenceProps({
        ref,
        'data-testid': 'flowbite-popover-target',
        ...children?.props,
      }),
    );
  }, [children, ref, getReferenceProps]);

  return (
    <>
      {target}
      {open && (
        <FloatingFocusManager context={context} modal>
          <div
            className={theme.base}
            ref={refs.setFloating}
            data-testid="flowbite-popover"
            {...props}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            <div className="relative">
              {arrow && (
                <div
                  className={theme.arrow.base}
                  data-testid="flowbite-popover-arrow"
                  ref={arrowRef}
                  style={{
                    top: arrowY ?? ' ',
                    left: arrowX ?? ' ',
                    right: ' ',
                    bottom: ' ',
                    [getArrowPlacement({ placement })]: theme.arrow.placement,
                  }}
                >
                  &nbsp;
                </div>
              )}
              <div className={theme.content}>{content}</div>
            </div>
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}
