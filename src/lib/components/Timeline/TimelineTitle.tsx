import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite';
import type { FlowbiteHeadingLevel } from '../Flowbite/FlowbiteTheme';

export type TimelineTitleProps = PropsWithChildren<
  ComponentProps<FlowbiteHeadingLevel> & {
    className?: string;
    as?: FlowbiteHeadingLevel;
  }
>;

export const TimelineTitle: FC<TimelineTitleProps> = ({ children, className, as = 'h3', ...props }) => {
  const theme = useTheme().theme.timeline.item.content;
  const Tag = as;

  return (
    <Tag className={classNames(theme.title, className)} {...props}>
      {children}
    </Tag>
  );
};
