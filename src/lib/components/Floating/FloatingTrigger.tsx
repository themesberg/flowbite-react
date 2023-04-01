import { useMergeRefs } from "@floating-ui/react";
import React from "react";
import { useFloatingContext } from './FloatingContext';

interface FloatingTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export const FloatingTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & FloatingTriggerProps
>(function FloatingTrigger({ children, asChild = false, ...props }, propRef) {
  const context = useFloatingContext();
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        "data-state": context.open ? "open" : "closed"
      })
    );
  }

  return (
    <div
      ref={ref}
      // The user can style the trigger based on the state
      data-state={context.open ? "open" : "closed"}
      {...context.getReferenceProps(props)}
      className="inline-block"
    >
      {children}
    </div>
  );
});