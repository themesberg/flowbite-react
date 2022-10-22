import type { Placement } from '@floating-ui/core';
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
import { Floating } from '../Floating';
import { useTheme } from '../Flowbite/ThemeContext';

export interface TooltipProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'style'>> {
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
  className,
  ...props
}) => {
  const theme = useTheme().theme.tooltip;

  return (
    <Floating
      content={content}
      style={style}
      animation={animation}
      placement={placement}
      arrow={arrow}
      trigger={trigger}
      theme={theme}
      className={className}
      {...props}
    >
      {children}
    </Floating>
  );
};
