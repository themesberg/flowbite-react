'use client';

import type { ComponentProps, FC } from 'react';
import { HiStar } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '~/src/helpers/merge-deep';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial } from '~/src/types';
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
  const { size = 'sm' } = useRatingContext();
  const theme = mergeDeep(getTheme().rating.star, customTheme);

  return (
    <Icon
      data-testid="flowbite-rating-star"
      className={twMerge(theme.sizes[size], theme[filled ? 'filled' : 'empty'], className)}
      {...props}
    />
  );
};
