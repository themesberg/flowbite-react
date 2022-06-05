import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export interface RatingAdvancedProps extends PropsWithChildren<ComponentProps<'div'>> {
  percentFilled?: number;
}

export const RatingAdvanced: FC<RatingAdvancedProps> = ({ percentFilled = 0, children }) => {
  const theme = useTheme().theme.rating.advanced;

  return (
    <div className={theme.base}>
      <span className={theme.label}>{children}</span>
      <div className={theme.progress.base}>
        <div className={theme.progress.fill} data-testid="rating-fill" style={{ width: `${percentFilled}%` }} />
      </div>
      <span className={theme.progress.label}>{`${percentFilled}%`}</span>
    </div>
  );
};
