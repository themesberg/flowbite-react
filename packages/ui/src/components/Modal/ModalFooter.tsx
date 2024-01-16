'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import { useModalContext } from './ModalContext';

export interface FlowbiteModalFooterTheme {
  base: string;
  popup: string;
}

export interface ModalFooterProps extends ComponentProps<'div'> {
  theme?: DeepPartial<FlowbiteModalFooterTheme>;
}

export const ModalFooter: FC<ModalFooterProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, popup } = useModalContext();

  const theme = mergeDeep(rootTheme.footer, customTheme);

  return (
    <div className={twMerge(theme.base, !popup && theme.popup, className)} {...props}>
      {children}
    </div>
  );
};
