'use client';

import { useListItem } from '@floating-ui/react';
import type { ComponentProps, ComponentPropsWithoutRef, ElementType, FC, RefCallback } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import { ButtonBase, type ButtonBaseProps } from '../Button/ButtonBase';
import { useDropdownContext } from './DropdownContext';

export interface FlowbiteDropdownItemTheme {
  container: string;
  base: string;
  icon: string;
}

export type DropdownItemProps<T extends ElementType = 'button'> = {
  // TODO: make it work with `Link` from Next.js
  as?: T;
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  onClick?: () => void;
  theme?: DeepPartial<FlowbiteDropdownItemTheme>;
} & ComponentPropsWithoutRef<T>;

export const DropdownItem = <T extends ElementType = 'button'>({
  children,
  className,
  icon: Icon,
  onClick,
  theme: customTheme = {},
  ...props
}: DropdownItemProps<T>) => {
  const { ref, index } = useListItem({ label: typeof children === 'string' ? children : undefined });
  const { theme: dropdownTheme, activeIndex, dismissOnClick, getItemProps, handleSelect } = useDropdownContext();
  const isActive = activeIndex === index;
  const theme = mergeDeep(dropdownTheme?.floating?.item ?? {}, customTheme);

  const theirProps = props as ButtonBaseProps<T>;

  return (
    <li role="menuitem" className={theme.container}>
      <ButtonBase
        ref={ref as RefCallback<T>}
        className={twMerge(theme.base, className)}
        {...theirProps}
        {...getItemProps({
          onClick: () => {
            onClick && onClick();
            dismissOnClick && handleSelect(null);
          },
        })}
        tabIndex={isActive ? 0 : -1}
      >
        {Icon && <Icon className={theme.icon} />}
        {children}
      </ButtonBase>
    </li>
  );
};
