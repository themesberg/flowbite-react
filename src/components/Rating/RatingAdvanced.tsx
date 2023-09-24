import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';

export interface FlowbiteRatingAdvancedTheme {
  base: string;
  label: string;
  progress: {
    base: string;
    fill: string;
    label: string;
  };
}

export interface RatingAdvancedProps extends PropsWithChildren, ComponentProps<'div'> {
  percentFilled?: number;
  theme?: DeepPartial<FlowbiteRatingAdvancedTheme>;
}

export const RatingAdvanced: FC<RatingAdvancedProps> = ({
  children,
  className,
  percentFilled = 0,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().rating.advanced, customTheme);

  return (
    <div className={twMerge(theme.base, className)} {...props}>
      <span className={theme.label}>{children}</span>
      <div className={theme.progress.base}>
        <div
          className={theme.progress.fill}
          data-testid="flowbite-rating-fill"
          style={{ width: `${percentFilled}%` }}
        />
      </div>
      <span className={theme.progress.label}>{`${percentFilled}%`}</span>
    </div>
  );
};
