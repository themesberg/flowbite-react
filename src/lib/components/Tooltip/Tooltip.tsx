import type { Placement } from '@floating-ui/core';
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { Floating, FlowbiteFloatingTheme } from '../Floating';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteTooltipTheme extends FlowbiteFloatingTheme {}

export interface TooltipProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'style'>> {
  content: ReactNode;
  placement?: 'auto' | Placement;
  trigger?: 'hover' | 'click';
  style?: 'dark' | 'light' | 'auto';
  animation?: false | `duration-${number}`;
  arrow?: boolean;
  theme?: DeepPartial<FlowbiteTooltipTheme>;
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
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.tooltip, customTheme);

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
