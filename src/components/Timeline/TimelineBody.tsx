import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import type { DeepPartial } from '../../';
import { useTheme } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';

export interface FlowbiteTimelineBodyTheme {
  body: string;
}

export interface TimelineBodyProps extends PropsWithChildren, ComponentProps<'p'> {
  theme?: DeepPartial<FlowbiteTimelineBodyTheme>;
}

export const TimelineBody: FC<TimelineBodyProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(useTheme().theme.timeline.item.content, customTheme).body;

  return (
    <div className={twMerge(theme, className)} {...props}>
      {children}
    </div>
  );
};
