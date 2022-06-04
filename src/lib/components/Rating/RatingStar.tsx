import type { ComponentProps, FC } from 'react';
import classNames from 'classnames';
import { useRatingContext } from './RatingContext';
import { HiStar } from 'react-icons/hi';

export type RatingStarProps = {
  filled?: boolean;
  starIcon?: FC<ComponentProps<'svg'>>;
};

const sizeClasses = {
  sm: 'w-5 h-5',
  md: 'w-7 h-7',
  lg: 'w-10 h-10',
};

export const RatingStar: FC<RatingStarProps> = ({ filled = true, starIcon: StarIcon = HiStar }) => {
  const { size = 'sm' } = useRatingContext();

  return (
    <StarIcon
      className={classNames(sizeClasses[size], {
        'text-yellow-400': filled,
        'text-gray-300 dark:text-gray-500': !filled,
      })}
      data-testid="rating-star"
    />
  );
};
