import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';

export interface RatingAdvancedProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>> {
  percentFilled?: number;
}

export const RatingAdvanced: FC<RatingAdvancedProps> = ({ percentFilled = 0, children, ...props }) => {
  const theme = useTheme().theme.rating.advanced;
  const theirProps = excludeClassName(props);

  return (
    <div className={theme.base} {...theirProps}>
      <span className={theme.label}>{children}</span>
      <div className={theme.progress.base}>
        <div className={theme.progress.fill} data-testid="rating-fill" style={{ width: `${percentFilled}%` }} />
      </div>
      <span className={theme.progress.label}>{`${percentFilled}%`}</span>
    </div>
  );
};
