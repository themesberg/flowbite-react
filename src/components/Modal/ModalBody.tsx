'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import { useModalContext } from './ModalContext';

export interface FlowbiteModalBodyTheme {
  base: string;
  popup: string;
}

export interface ModalBodyProps extends ComponentProps<'div'> {
  theme?: DeepPartial<FlowbiteModalBodyTheme>;
}

export const ModalBody: FC<ModalBodyProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, popup } = useModalContext();

  const theme = mergeDeep(rootTheme.body, customTheme);

  return (
    <div className={twMerge(theme.base, popup && [theme.popup], className)} {...props}>
      {children}
    </div>
  );
};
