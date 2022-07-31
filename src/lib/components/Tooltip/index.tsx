import type { Placement } from '@floating-ui/core';
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { Floating } from '../Floating';
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

  return (
    <Floating
      content={content}
      style={style}
      animation={animation}
      placement={placement}
      arrow={arrow}
      trigger={trigger}
      theme={theme}
      {...theirProps}
    >
      {children}
    </Floating>
  );
};
