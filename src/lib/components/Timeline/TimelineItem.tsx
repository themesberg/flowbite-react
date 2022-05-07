import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

export type TimelineItemProps = PropsWithChildren<{
  className?: string;
}>;

export const TimelineItem: FC<TimelineItemProps> = ({ className, children }) => {
  return <li className="mb-10 ml-6">{children}</li>;
};
