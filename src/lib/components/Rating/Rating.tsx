import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import { RatingAdvanced } from './RatingAdvanced';
import { RatingContext } from './RatingContext';
import { RatingStar } from './RatingStar';

export interface FlowbiteRatingTheme {
  base: string;
  star: {
    sizes: StarSizes;
    filled: string;
    empty: string;
  };
  advanced: {
    base: string;
    label: string;
    progress: {
      base: string;
      fill: string;
      label: string;
    };
  };
}

export interface StarSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string;
}

export interface RatingProps extends PropsWithChildren<ComponentProps<'div'>> {
  size?: keyof StarSizes;
}

const RatingComponent: FC<RatingProps> = ({ children, size = 'sm', className, ...props }) => {
  const theme = useTheme().theme.rating;

  return (
    <RatingContext.Provider value={{ size }}>
      <div className={classNames(theme.base, className)} {...props}>
        {children}
      </div>
    </RatingContext.Provider>
  );
};

RatingComponent.displayName = 'Rating';
RatingStar.displayName = 'Rating.Star';
RatingAdvanced.displayName = 'Rating.Advanced';

export const Rating = Object.assign(RatingComponent, {
  Star: RatingStar,
  Advanced: RatingAdvanced,
});
