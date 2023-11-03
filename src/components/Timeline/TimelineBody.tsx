'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import { useTimelineContext } from './TimelineContext';

export interface FlowbiteTimelineBodyTheme {
  body: string;
}

export interface TimelineBodyProps extends ComponentProps<'p'> {
  theme?: DeepPartial<FlowbiteTimelineBodyTheme>;
}

export const TimelineBody: FC<TimelineBodyProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useTimelineContext();

  const theme = mergeDeep(rootTheme.item.content, customTheme).body;

  return (
    <div className={twMerge(theme, className)} {...props}>
      {children}
    </div>
  );
};
