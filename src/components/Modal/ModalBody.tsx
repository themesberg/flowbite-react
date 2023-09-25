'use client';

import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '~/src/helpers/merge-deep';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial } from '~/src/types';
import { useModalContext } from './ModalContext';

export interface FlowbiteModalBodyTheme {
  base: string;
  popup: string;
}

export interface ModalBodyProps extends PropsWithChildren<ComponentProps<'div'>> {
  theme?: DeepPartial<FlowbiteModalBodyTheme>;
}

export const ModalBody: FC<ModalBodyProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().modal.body, customTheme);
  const { popup } = useModalContext();

  return (
    <div className={twMerge(theme.base, popup && [theme.popup], className)} {...props}>
      {children}
    </div>
  );
};
