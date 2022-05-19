import { FC, PropsWithChildren, ComponentProps } from 'react';
import classNames from 'classnames';
import { useTimelineContext } from './TimelineContext';

export type TimelnePointProps = PropsWithChildren<ComponentProps<'div'>>;

export const TimelinePoint: FC<TimelnePointProps> = ({ children, ...props }) => {
  const { horizontal } = useTimelineContext();
  return (
    <div data-testid="timeline-point" className={classNames({ 'flex items-center': horizontal })} {...props}>
      {children}
      {horizontal ? <div className="hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex"></div> : ''}
    </div>
  );
};
