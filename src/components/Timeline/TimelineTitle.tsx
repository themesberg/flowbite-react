'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import type { FlowbiteHeadingLevel } from '../Flowbite';
import { useTimelineContext } from './TimelineContext';

export interface FlowbiteTimelineTitleTheme {
  title: string;
}

export interface TimelineTitleProps extends ComponentProps<'h1'> {
  as?: FlowbiteHeadingLevel;
  theme?: DeepPartial<FlowbiteTimelineTitleTheme>;
}

export const TimelineTitle: FC<TimelineTitleProps> = ({
  as: Tag = 'h3',
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme } = useTimelineContext();

  const theme = mergeDeep(rootTheme.item.content, customTheme).title;

  return (
    <Tag className={twMerge(theme, className)} {...props}>
      {children}
    </Tag>
  );
};
