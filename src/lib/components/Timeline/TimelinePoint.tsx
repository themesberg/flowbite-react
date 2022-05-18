import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useTimelineContext } from './TimelineContext';

export const TimelinePoint: FC<PropsWithChildren<any>> = ({ children }) => {
  const { horizontal } = useTimelineContext();
  return (
    <div className={classNames({ 'flex items-center': horizontal })}>
      {children}
      {horizontal ? <div className="hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex"></div> : ''}
    </div>
  );
};
