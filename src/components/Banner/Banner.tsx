import type { ComponentProps, FC } from 'react';
import { BannerCollapseButton } from './BannerCollapseButton';

export type BannerComponentProps = ComponentProps<'div'>;

const BannerComponent: FC<BannerComponentProps> = ({ children, ...props }) => {
  return (
    <div data-testid="flowbite-banner" role="banner" tabIndex={-1} {...props}>
      {children}
    </div>
  );
};

BannerComponent.displayName = 'Banner';
export const Banner = Object.assign(BannerComponent, {
  CollapseButton: BannerCollapseButton,
});
