'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import { useTimelineContext } from './TimelineContext';

export interface FlowbiteTimelineTimeTheme {
  time: string;
}

export interface TimelineTimeProps extends ComponentProps<'time'> {
  theme?: DeepPartial<FlowbiteTimelineTimeTheme>;
}

export const TimelineTime: FC<TimelineTimeProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useTimelineContext();

  const theme = mergeDeep(rootTheme.item.content, customTheme).time;

  return (
    <time className={twMerge(theme, className)} {...props}>
      {children}
    </time>
  );
};
