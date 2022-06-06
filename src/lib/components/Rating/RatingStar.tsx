import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { HiStar } from 'react-icons/hi';
import { useTheme } from '../Flowbite/ThemeContext';
import { useRatingContext } from './RatingContext';

export interface RatingStarProps {
  filled?: boolean;
  starIcon?: FC<ComponentProps<'svg'>>;
}

export const RatingStar: FC<RatingStarProps> = ({ filled = true, starIcon: Icon = HiStar }) => {
  const { size = 'sm' } = useRatingContext();
  const theme = useTheme().theme.rating.star;

  return (
    <Icon className={classNames(theme.sizes[size], theme[filled ? 'filled' : 'empty'])} data-testid="rating-star" />
  );
};
