import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import { type FlowbiteSkeletonImageTheme, SkeletonImage } from './SkeletonImage';
import { type FlowbiteSkeletonVideoTheme, SkeletonVideo } from './SkeletonVideo';
import { type FlowbiteSkeletonCardTheme, SkeletonCard } from './SkeletonCard';
import { type FlowbiteSkeletonListTheme, SkeletonList } from './SkeletonList';
import { type FlowbiteSkeletonTestimonialTheme, SkeletonTestimonial } from './SkeletonTestimonial';

export interface FlowbiteSkeletonTheme {
  root: FlowbiteSkeletonRootTheme;
  variant: {
    base: string;
    type: {
      default: string;
      rectangular: string;
      rounded: string;
      circular: string;
    };
  };
  image: FlowbiteSkeletonImageTheme;
  video: FlowbiteSkeletonVideoTheme;
  card: FlowbiteSkeletonCardTheme;
  list: FlowbiteSkeletonListTheme;
  testimonial: FlowbiteSkeletonTestimonialTheme;
}

export interface FlowbiteSkeletonRootTheme {
  base: string;
}

export interface SkeletonProps extends ComponentProps<'div'> {
  theme?: DeepPartial<FlowbiteSkeletonTheme>;
  variant?: 'default' | 'rectangular' | 'rounded' | 'circular';
}

const SkeletonComponent: FC<SkeletonProps> = ({
  className,
  theme: customTheme = {},
  variant: skeletonVariant = 'default',
  ...props
}) => {
  const theme = mergeDeep(getTheme().skeleton, customTheme);

  return (
    <div role="status" className={theme.root.base} data-testid="flowbite-skeleton" {...props}>
      <div className={twMerge(theme.variant.base, theme.variant.type[skeletonVariant], className)} />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

SkeletonComponent.displayName = 'Skeleton';
SkeletonImage.displayName = 'Skeleton.Image';
SkeletonVideo.displayName = 'Skeleton.Video';
SkeletonCard.displayName = 'Skeleton.Card';
SkeletonList.displayName = 'Skeleton.List';
SkeletonTestimonial.displayName = 'Skeleton.Testimonial';

export const Skeleton = Object.assign(SkeletonComponent, {
  Image: SkeletonImage,
  Video: SkeletonVideo,
  Card: SkeletonCard,
  List: SkeletonList,
  Testimonial: SkeletonTestimonial,
});
