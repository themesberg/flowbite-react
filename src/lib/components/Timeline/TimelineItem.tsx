import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useTimelineContext } from './TimelineContext';

export const TimelineItem: FC<PropsWithChildren<any>> = ({ children }) => {
  const { horizontal } = useTimelineContext();
  return <li className={classNames({ 'mb-10 ml-6': !horizontal, 'relative mb-6 sm:mb-0': horizontal })}>{children}</li>;
};
