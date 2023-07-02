import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import type { DeepPartial, FlowbiteHeadingLevel } from '../../';
import { useTheme } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';

export interface FlowbiteTimelineTitleTheme {
  title: string;
}

export interface TimelineTitleProps extends PropsWithChildren, ComponentProps<'h1'> {
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
  const theme = mergeDeep(useTheme().theme.timeline.item.content, customTheme).title;

  return (
    <Tag className={twMerge(theme, className)} {...props}>
      {children}
    </Tag>
  );
};
