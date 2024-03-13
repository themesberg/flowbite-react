import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';

export interface FlowbiteSkeletonListTheme {
  base: string;
  textList: {
    base: string;
    list: {
      textOne: string;
      textTwo: string;
      textThree: string;
    };
  };
}

export interface SkeletonListProps {
  theme?: DeepPartial<FlowbiteSkeletonListTheme>;
  className?: string;
}

export const SkeletonList: FC<SkeletonListProps> = ({ className, theme: customTheme = {} }) => {
  const theme = mergeDeep(getTheme().skeleton.list, customTheme);

  return (
    <div role="status" className={twMerge(theme.base, className)} data-testid="flowbite-skeleton-list">
      <div className={theme.textList.base}>
        <div>
          <div className={theme.textList.list.textOne} />
          <div className={theme.textList.list.textTwo} />
        </div>
        <div className={theme.textList.list.textThree} />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
