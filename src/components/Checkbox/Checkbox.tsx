'use client';

import type { ComponentProps } from 'react';
import { forwardRef, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { FlowbiteColors } from '../Flowbite';

export interface FlowbiteCheckboxTheme {
  root: FlowbiteCheckboxRootTheme;
}
export interface FlowbiteCheckboxRootTheme {
  base: string;
  color: FlowbiteColors;
}

export interface CheckboxProps extends Omit<ComponentProps<'input'>, 'type' | 'ref' | 'color'> {
  theme?: DeepPartial<FlowbiteCheckboxTheme>;
  color?: keyof FlowbiteColors;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, color = 'default', theme: customTheme = {}, indeterminate, ...props }, ref) => {
    const theme = mergeDeep(getTheme().checkbox, customTheme);

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (inputRef.current && indeterminate !== inputRef.current.indeterminate) {
        inputRef.current.indeterminate = !!indeterminate;
      }
    }, [indeterminate]);

    return (
      <input
        ref={(element) => {
          inputRef.current = element;
          if (ref) {
            if (typeof ref === 'function') {
              ref(element);
            } else {
              ref.current = element;
            }
          }
        }}
        type="checkbox"
        className={twMerge(
          'indeterminate:bg-indeterminate dark:indeterminate:bg-current dark:indeterminate:border-gray-600',
          theme.root.base,
          theme.root.color[color],
          className,
        )}
        {...props}
      />
    );
  },
);

Checkbox.displayName = 'Checkbox';
