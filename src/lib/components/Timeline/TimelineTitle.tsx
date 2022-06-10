import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { FlowbiteHeadingLevel } from '../Flowbite/FlowbiteTheme';

export type TimelineTitleProps = PropsWithChildren<
  ComponentProps<FlowbiteHeadingLevel> & {
    className?: string;
    as?: FlowbiteHeadingLevel;
  }
>;

export const TimelineTitle: FC<TimelineTitleProps> = ({ children, className, as = 'h3', ...props }) => {
  const Tag = as;
  return (
    <Tag className={classNames('text-lg font-semibold text-gray-900 dark:text-white', className)} {...props}>
      {children}
    </Tag>
  );
};
