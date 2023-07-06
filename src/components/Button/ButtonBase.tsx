import { createElement, forwardRef, type ComponentProps, type ElementType } from 'react';

export interface ButtonBaseProps extends Omit<ComponentProps<'button'>, 'color' | 'ref'> {
  as?: ElementType;
  href?: string;
}

interface Props extends ButtonBaseProps, Record<string, unknown> {}

export const ButtonBase = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  ({ children, as: Component = 'button', href, ...props }, ref) => {
    const BaseComponent = href ? 'a' : Component ?? 'button';
    const type = Component === 'button' ? 'button' : undefined;

    return createElement(BaseComponent, { ref, href, type, ...props }, children);
  },
);
ButtonBase.displayName = 'Button';
