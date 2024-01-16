'use client';

import type { ComponentProps, FC } from 'react';
import { HiStar } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import type { FlowbiteSizes } from '../Flowbite';
import { useRatingContext } from './RatingContext';

export interface FlowbiteRatingStarTheme {
  empty: string;
  filled: string;
  sizes: FlowbiteStarSizes;
}

export interface FlowbiteStarSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string;
}

export interface RatingStarProps extends ComponentProps<'svg'> {
  filled?: boolean;
  starIcon?: FC<ComponentProps<'svg'>>;
  theme?: DeepPartial<FlowbiteRatingStarTheme>;
}

export const RatingStar: FC<RatingStarProps> = ({
  className,
  filled = true,
  starIcon: Icon = HiStar,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme, size = 'sm' } = useRatingContext();

  const theme = mergeDeep(rootTheme.star, customTheme);

  return (
    <Icon
      data-testid="flowbite-rating-star"
      className={twMerge(theme.sizes[size], theme[filled ? 'filled' : 'empty'], className)}
      {...props}
    />
  );
};
