import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import type { FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import { RatingAdvanced } from './RatingAdvanced';
import { RatingContext } from './RatingContext';
import { RatingStar } from './RatingStar';

export interface StarSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string;
}

export interface RatingProps extends PropsWithChildren<ComponentProps<'div'>> {
  size?: keyof StarSizes;
}

const RatingComponent: FC<RatingProps> = ({ children, size = 'sm', ...props }) => {
  const theme = useTheme().theme.rating;
  const theirProps = excludeClassName(props);

  return (
    <RatingContext.Provider value={{ size }}>
      <div className={theme.base} {...theirProps}>
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
