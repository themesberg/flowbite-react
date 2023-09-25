'use client';

import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '~/src/helpers/merge-deep';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial } from '~/src/types';
import type { FlowbiteTimelineContentTheme } from './TimelineContent';
import { useTimelineContext } from './TimelineContext';
import type { FlowbiteTimelinePointTheme } from './TimelinePoint';

export interface FlowbiteTimelineItemTheme {
  root: {
    horizontal: string;
    vertical: string;
  };
  content: FlowbiteTimelineContentTheme;
  point: FlowbiteTimelinePointTheme;
}

export interface TimelineItemProps extends PropsWithChildren, ComponentProps<'li'> {
  theme?: DeepPartial<FlowbiteTimelineItemTheme>;
}

export const TimelineItem: FC<TimelineItemProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().timeline.item, customTheme);
  const { horizontal } = useTimelineContext();

  return (
    <li
      data-testid="timeline-item"
      className={twMerge(horizontal && theme.root.horizontal, !horizontal && theme.root.vertical, className)}
      {...props}
    >
      {children}
    </li>
  );
};
