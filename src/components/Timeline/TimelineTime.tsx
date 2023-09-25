import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '~/src/helpers/merge-deep';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial } from '~/src/types';

export interface FlowbiteTimelineTimeTheme {
  time: string;
}

export interface TimelineTimeProps extends PropsWithChildren, ComponentProps<'time'> {
  theme?: DeepPartial<FlowbiteTimelineTimeTheme>;
}

export const TimelineTime: FC<TimelineTimeProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().timeline.item.content, customTheme).time;

  return (
    <time className={twMerge(theme, className)} {...props}>
      {children}
    </time>
  );
};
