'use client';

import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';
import { useModalContext } from './ModalContext';

export interface FlowbiteModalFooterTheme {
  base: string;
  popup: string;
}

export interface ModalFooterProps extends PropsWithChildren<ComponentProps<'div'>> {
  theme?: DeepPartial<FlowbiteModalFooterTheme>;
}

export const ModalFooter: FC<ModalFooterProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().modal.footer, customTheme);
  const { popup } = useModalContext();

  return (
    <div className={twMerge(theme.base, !popup && theme.popup, className)} {...props}>
      {children}
    </div>
  );
};
