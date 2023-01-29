import React, { PropsWithChildren } from 'react';

// Virtual component to which propagates the click handler to the children
export const ProxyChild = ({ children, onClick }: PropsWithChildren<{ onClick: () => void }>) => {
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...children.props,
      // merge handler
      onClick: children.props.onClick
        ? (...args: unknown[]) => {
            children.props.onClick(...args);
            onClick();
          }
        : onClick,
    });
  }

  return React.Children.count(children) > 1 ? React.Children.only(null) : null;
};
