import { FC, PropsWithChildren, ComponentProps } from 'react';
import classNames from 'classnames';
import { HeadingLevel } from '../Flowbite/FlowbiteTheme';

export type TimelineTitleProps = PropsWithChildren<
  ComponentProps<HeadingLevel> & {
    className?: string;
    as?: HeadingLevel;
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
