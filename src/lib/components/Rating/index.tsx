import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { RatingAdvanced } from './RatingAdvanced';
import type { StarSizes } from './RatingContext';
import { RatingContext } from './RatingContext';
import { RatingStar } from './RatingStar';
import { useTheme } from '../Flowbite/ThemeContext';

export interface RatingProps extends PropsWithChildren<ComponentProps<'div'>> {
  size?: keyof StarSizes;
}

const RatingComponent: FC<RatingProps> = ({ children, size = 'sm' }) => {
  const theme = useTheme().theme.rating;

  return (
    <RatingContext.Provider value={{ size }}>
      <div className={theme.base}>{children}</div>
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
