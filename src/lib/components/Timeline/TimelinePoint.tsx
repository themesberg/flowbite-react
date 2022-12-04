import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite';
import { useTimelineContext } from './TimelineContext';

export type TimelnePointProps = PropsWithChildren<
  ComponentProps<'div'> & {
    icon?: FC<ComponentProps<'svg'>>;
    className?: string;
  }
>;

export const TimelinePoint: FC<TimelnePointProps> = ({ children, className, icon: Icon, ...props }) => {
  const theme = useTheme().theme.timeline.item.point;
  const { horizontal } = useTimelineContext();

  return (
    <div
      data-testid="timeline-point"
      className={classNames(horizontal && theme.base.horizontal, !horizontal && theme.base.vertical, className)}
      {...props}
    >
      {children}
      {Icon ? (
        <span className={classNames(theme.marker.icon.wrapper)}>
          <Icon aria-hidden className={classNames(theme.marker.icon.base)} />
        </span>
      ) : (
        <div className={classNames(theme.marker.base)}></div>
      )}
      {horizontal && <div className={classNames(theme.line)} />}
    </div>
  );
};
