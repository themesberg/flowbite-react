import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial, FlowbiteHeadingLevel } from '~/src';
import { useTheme } from '~/src';
import { mergeDeep } from '~/src/helpers/merge-deep';

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
    <Tag className={classNames(theme, className)} {...props}>
      {children}
    </Tag>
  );
};
