import { FC } from 'react';
import { RatingStar } from './RatingStar';
import classNames from 'classnames';

export type RatingComponentProps = {
  className?: string;
};

const RatingComponent: FC<RatingComponentProps> = ({ children, className }) => {
  return <div className={classNames('flex items-center', className)}>{children}</div>;
};

RatingComponent.displayName = 'Rating';
RatingStar.displayName = 'Rating.Star';

export const Rating = Object.assign(RatingComponent, {
  Star: RatingStar,
});
