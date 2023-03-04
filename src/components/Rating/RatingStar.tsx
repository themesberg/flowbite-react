import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { HiStar } from 'react-icons/hi';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
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
  const theme = mergeDeep(useTheme().theme.rating.star, customTheme);

  return (
    <Icon
      data-testid="flowbite-rating-star"
      className={classNames(theme.sizes[size], theme[filled ? 'filled' : 'empty'], className)}
      {...props}
    />
  );
};
