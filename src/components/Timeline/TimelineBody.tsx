import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';

export interface FlowbiteTimelineBodyTheme {
  body: string;
}

export interface TimelineBodyProps extends PropsWithChildren, ComponentProps<'p'> {
  theme?: DeepPartial<FlowbiteTimelineBodyTheme>;
}

export const TimelineBody: FC<TimelineBodyProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().timeline.item.content, customTheme).body;

  return (
    <div className={twMerge(theme, className)} {...props}>
      {children}
    </div>
  );
};
