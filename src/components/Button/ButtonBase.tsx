import { createElement, type ComponentPropsWithoutRef, type ElementType, type ForwardedRef, forwardRef } from 'react';

export type ButtonBaseProps<T extends ElementType = 'button'> = {
  as?: T;
  href?: string;
} & ComponentPropsWithoutRef<T>;

export const ButtonBase = forwardRef(
  <T extends ElementType = 'button'>(
    { children, as: Component, href, type = 'button', ...props }: ButtonBaseProps<T>,
    ref: ForwardedRef<T>,
  ) => {
    const BaseComponent = Component || (href ? 'a' : 'button');

    return createElement(BaseComponent, { ref, href, type, ...props }, children);
  },
);

ButtonBase.displayName = 'ButtonBaseComponent';
