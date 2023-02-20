import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite';
import { useTimelineContext } from './TimelineContext';

export interface FlowbiteTimelinePointTheme {
  horizontal: string;
  line: string;
  marker: {
    base: {
      horizontal: string;
      vertical: string;
    };
    icon: {
      base: string;
      wrapper: string;
    };
  };
  vertical: string;
}

export interface TimelnePointProps extends PropsWithChildren, ComponentProps<'div'> {
  icon?: FC<ComponentProps<'svg'>>;
  theme?: DeepPartial<FlowbiteTimelinePointTheme>;
}

export const TimelinePoint: FC<TimelnePointProps> = ({
  children,
  className,
  icon: Icon,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.timeline.item.point, customTheme);
  const { horizontal } = useTimelineContext();

  return (
    <div
      data-testid="timeline-point"
      className={classNames(horizontal && theme.horizontal, !horizontal && theme.vertical, className)}
      {...props}
    >
      {children}
      {Icon ? (
        <span className={classNames(theme.marker.icon.wrapper)}>
          <Icon aria-hidden className={classNames(theme.marker.icon.base)} />
        </span>
      ) : (
        <div
          className={classNames(horizontal && theme.marker.base.horizontal, !horizontal && theme.marker.base.vertical)}
        />
      )}
      {horizontal && <div className={classNames(theme.line)} />}
    </div>
  );
};
