import { FC } from 'react';
import classNames from 'classnames';
import { RatingAdvanced } from './RatingAdvanced';
import { RatingContext, Size } from './RatingContext';
import { RatingStar } from './RatingStar';

export type RatingComponentProps = {
  className?: string;
  size?: Size;
};

const RatingComponent: FC<RatingComponentProps> = ({ children, className, size = 'sm' }) => {
  return (
    <RatingContext.Provider value={{ size }}>
      <div className={classNames('flex items-center', className)}>{children}</div>
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
