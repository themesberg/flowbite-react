import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite';

export type TimelineBodyProps = PropsWithChildren<
  ComponentProps<'p'> & {
    className?: string;
  }
>;

export const TimelineBody: FC<TimelineBodyProps> = ({ children, className, ...props }) => {
  const theme = useTheme().theme.timeline.item.content;

  return (
    <p className={classNames(theme.body, className)} {...props}>
      {children}
    </p>
  );
};
