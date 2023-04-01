import { useMergeRefs, FloatingPortal, FloatingFocusManager, Placement } from "@floating-ui/react";
import classNames from 'classnames';
import React, { ComponentProps, PropsWithChildren, ReactNode } from "react";
import { useFloatingContext } from './FloatingContext';
import style from "styled-jsx/style";

export interface FloatingProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'style'>> {
  animation?: false | `duration-${number}`;
  arrow?: boolean;
  closeRequestKey?: string;
  content: ReactNode;
  placement?: 'auto' | Placement;
  style?: 'dark' | 'light' | 'auto';
  trigger?: 'hover' | 'click';
  initialOpen?: boolean;
}

export const FloatingContent = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement>
>(function(props: FloatingProps, propRef) {
  const { context: floatingContext, ...context } = useFloatingContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  return (
    <FloatingPortal>
      {context.open && (
        <FloatingFocusManager context={floatingContext} modal={context.modal}>
          <div
            data-testid="flowbite-tooltip"
            ref={ref}
            style={{
              position: context.strategy,
              top: context.y ?? 0,
              left: context.x ?? 0,
              width: "max-content",
              ...style
            }}
            aria-labelledby={context.labelId}
            aria-describedby={context.descriptionId}
            {...context.getFloatingProps({
              className: classNames(
                context.theme.base,
                props.animation && `${context.theme.animation} ${props.animation}`,
                !open && context.theme.hidden,
                context.theme.style[props.style || 'auto'],
                props.className,
              ),
              // style: {
              //   position: context.strategy,
              //   top: context.y ?? '0',
              //   left: context.x ?? '0',
              // },
              ...props,
            })}
          >
            {props.children}
          </div>
        </FloatingFocusManager>
      )}
    </FloatingPortal>
  );
} );