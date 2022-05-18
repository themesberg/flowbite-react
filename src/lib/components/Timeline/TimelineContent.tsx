import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useTimelineContext } from './TimelineContext';

export const TimelineContent: FC<PropsWithChildren<any>> = ({ children }) => {
  const { horizontal } = useTimelineContext();
  return <div className={classNames({ 'mt-3 sm:pr-8': horizontal })}>{children}</div>;
};
