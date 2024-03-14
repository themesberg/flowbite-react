import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';

export interface FlowbiteSkeletonImageTheme {
  base: string;
  imgDiv: string;
  imgSvg: string;
  texts: {
    base: string;
    lineOne: string;
    lineTwo: string;
    lineThree: string;
    lineFour: string;
    lineFive: string;
    lineSix: string;
  };
}

export interface SkeletonImageProps {
  theme?: DeepPartial<FlowbiteSkeletonImageTheme>;
  className?: string;
}

export const SkeletonImage: FC<SkeletonImageProps> = ({ className, theme: customTheme = {} }) => {
  const theme = mergeDeep(getTheme().skeleton.image, customTheme);

  return (
    <div role="status" className={twMerge(theme.base, className)} data-testid="flowbite-skeleton-image">
      <div className={theme.imgDiv}>
        <svg
          className={theme.imgSvg}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className={theme.texts.base}>
        <div className={theme.texts.lineOne} />
        <div className={theme.texts.lineTwo} />
        <div className={theme.texts.lineThree} />
        <div className={theme.texts.lineFour} />
        <div className={theme.texts.lineFive}>
          <div className={theme.texts.lineSix} />
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
