import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite';

export type TimelineTimeProps = PropsWithChildren<
  ComponentProps<'time'> & {
    className?: string;
  }
>;

export const TimelineTime: FC<TimelineTimeProps> = ({ children, className, ...props }) => {
  const theme = useTheme().theme.timeline.item.content;
  return (
    <time className={classNames(theme.time, className)} {...props}>
      {children}
    </time>
  );
};
