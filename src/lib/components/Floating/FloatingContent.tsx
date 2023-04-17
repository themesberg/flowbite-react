import { FloatingArrow, FloatingFocusManager, FloatingPortal, useMergeRefs } from '@floating-ui/react';
import classNames from 'classnames';
import React from 'react';
import type { FloatingProps } from './Floating';
import { useFloatingContext } from './FloatingContext';

export const FloatingContent = React.forwardRef(function (props: FloatingProps, propRef) {
  const { context: floatingContext, ...context } = useFloatingContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  return (
    <FloatingPortal>
      <FloatingFocusManager context={floatingContext} modal={context.modal}>
        <div
          data-testid="flowbite-tooltip"
          ref={ref}
          style={{
            position: context.strategy,
            top: context.y ?? 0,
            left: context.x ?? 0,
            width: 'max-content',
          }}
          aria-labelledby={context.labelId}
          aria-describedby={context.descriptionId}
          {...context.getFloatingProps({
            className: classNames(
              context.theme.base,
              context.animation && `${context.theme.animation} ${context.animation}`,
              !context.open && context.theme.hidden,
              context.theme.style[context.style || 'auto'],
              props.className,
            ),
          })}
        >
          {props.children}
          {context.arrow && (
            <FloatingArrow
              ref={context.arrowRef}
              context={floatingContext}
              className={classNames(context.theme.arrow.base, context.theme.arrow.style[context.style || 'auto'])}
              data-testid="flowbite-tooltip-arrow"
            />
          )}
        </div>
      </FloatingFocusManager>
    </FloatingPortal>
  );
});
