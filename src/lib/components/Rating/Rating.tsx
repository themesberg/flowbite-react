import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';
import type { FlowbiteRatingAdvancedTheme } from './RatingAdvanced';
import { RatingAdvanced } from './RatingAdvanced';
import { RatingContext } from './RatingContext';
import type { FlowbiteRatingStarTheme, FlowbiteStarSizes } from './RatingStar';
import { RatingStar } from './RatingStar';

export interface FlowbiteRatingTheme {
  root: {
    base: string;
  };
  star: FlowbiteRatingStarTheme;
  advanced: FlowbiteRatingAdvancedTheme;
}

export interface RatingProps extends PropsWithChildren<ComponentProps<'div'>> {
  size?: keyof FlowbiteStarSizes;
  theme?: DeepPartial<FlowbiteRatingTheme>;
}

const RatingComponent: FC<RatingProps> = ({ children, className, size = 'sm', theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(useTheme().theme.rating, customTheme);

  return (
    <RatingContext.Provider value={{ size }}>
      <div className={classNames(theme.root.base, className)} {...props}>
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
