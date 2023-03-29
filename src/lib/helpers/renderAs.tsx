import classNames from 'classnames';
import { cloneElement, ComponentProps, createElement, ElementType, forwardRef, Fragment, isValidElement } from 'react';
import { mergeRefs } from 'react-merge-refs';

export type Props<TTag extends ElementType> = Omit<ComponentProps<TTag>, 'ref'> & { as?: TTag };

export interface RederAsProps<TTag extends ElementType> {
  defaultTag: ElementType;
  componentName: string;
  passedProps: Props<TTag>;
}

interface PropChildren {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<unknown>;
}

export function RenderAs<TTag extends ElementType>({
  defaultTag,
  componentName,
  passedProps,
  ...rest
}: RederAsProps<TTag> & ComponentProps<TTag>) {
  const Component = passedProps.as ?? defaultTag;

  const props = mergeProps(passedProps, rest);

  console.log('props', props)

  if (Component === Fragment) {
    if (Object.keys(props).length > 0) {
      if (!isValidElement(props.children) || (Array.isArray(props.children) && props.children.length > 1)) {
        throw new Error(
          [
            'Bad props ' + componentName,
            `The current component <${componentName} /> is rendering as a "Fragment".`,
            `However we need to passthrough the following props:`,
            Object.keys(props)
              .map((line) => `  - ${line}`)
              .join('\n'),
            '',
            'To fix this, you need to render a single element as the child so that we can forward the props onto that element.',
          ].join('\n'),
        );
      }

      const { ref, className, style, ...remaining } = props;

      // Pass all props to the child since we are rendering as a Fragment
      return cloneElement(
        props.children,
        Object.assign(
          {},
          mergeProps(props.children.props as PropChildren, remaining),
          ref,
          {
            className: classNames((props.children as PropChildren)?.className, className),
            style: {
              ...(props.children.props as PropChildren)?.style,
              ...(props.stylke ?? {}),
              ...style,
            },
          },
          (props.children as PropChildren)?.ref !== undefined ? mergeRefs([(props.children as any).ref, ref]) : ref,
        ),
      );
    }
  }

  const { ref, ...remaining } = props;

  return createElement(Component, Object.assign({}, remaining, Component !== Fragment && ref), props.children);
}

type PropsArg = Record<string, any> | null | undefined;

// Merge props from multiple objects
// Props from later objects will overwrite props from earlier objects
function mergeProps<T extends PropsArg[]>(...args: T) {
  const results = { ...args[0] };

  for (let i = 1; i < args.length; i++) {
    const obj = args[i];
    if (!obj) continue;
    for (const prop in obj) {
      if (typeof obj[prop] === 'function') {
        // If the prop is a function, we need to merge the functions
        results[prop] = (...args: any[]) => {
          obj[prop](...args);
          results[prop](...args);
        };
      } else {
        if (prop === 'className') {
          // If the prop is className, we need to merge the classNames
          results[prop] = classNames(results[prop], obj[prop]);
          continue;
        } else {
          // Otherwise, we can just overwrite the value
          results[prop] = obj[prop];
        }
      }
    }
  }

  return results;
}

/**
 * To get the proper types passed through to the component, we need to use a
 * forwardRefWithAs function. This function will forward the ref and the as
 * prop to the component.
 */
export function forwardRefWithAs<T extends { name: string; displayName?: string }>(
  component: T,
): T & { displayName: string } {
  return Object.assign(forwardRef(component as unknown as any) as any, {
    displayName: component.displayName ?? component.name,
  });
}
