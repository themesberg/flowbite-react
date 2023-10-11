import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';

export interface FlowbiteBlockquoteTheme {
  root: FlowbiteBlockquoteRootTheme;
}

export interface FlowbiteBlockquoteRootTheme {
  base: string;
}

export interface BlockquoteProps extends PropsWithChildren<ComponentProps<'blockquote'>> {
  theme?: DeepPartial<FlowbiteBlockquoteTheme>;
}

export const Blockquote: FC<BlockquoteProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().blockquote, customTheme);

  return (
    <blockquote className={twMerge(theme.root.base, className)} data-testid="flowbite-blockquote" {...props}>
      {children}
    </blockquote>
  );
};

Blockquote.displayName = 'Blockquote';
