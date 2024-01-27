'use client';

import { useListItem, useMergeRefs } from '@floating-ui/react';
import { forwardRef, type ComponentProps, type ElementType, type FC, type RefCallback } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import { ButtonBase, type ButtonBaseProps } from '../Button/ButtonBase';
import { useDropdownContext } from './DropdownContext';
import type { PolymorphicComponentPropWithRef, PolymorphicRef } from '~/src/helpers/generic-as-prop';

export interface FlowbiteDropdownItemTheme {
  container: string;
  base: string;
  icon: string;
}

export type DropdownItemProps<T extends ElementType = 'button'> = PolymorphicComponentPropWithRef<
  T,
  {
    href?: string;
    icon?: FC<ComponentProps<'svg'>>;
    onClick?: () => void;
    theme?: DeepPartial<FlowbiteDropdownItemTheme>;
  }
>;

type DropdownItemComponentType = (<C extends React.ElementType = 'button'>(
  props: DropdownItemProps<C>,
) => React.ReactNode | null) & { displayName?: string };

export const DropdownItem: DropdownItemComponentType = forwardRef(
  <T extends ElementType = 'button'>(
    { children, className, icon: Icon, onClick, theme: customTheme = {}, ...props }: DropdownItemProps<T>,
    forwardedRef: PolymorphicRef<T>,
  ) => {
    const { ref: listItemRef, index } = useListItem({ label: typeof children === 'string' ? children : undefined });
    const ref = useMergeRefs([forwardedRef, listItemRef]);
    const { theme: rootTheme, activeIndex, dismissOnClick, getItemProps, handleSelect } = useDropdownContext();
    const isActive = activeIndex === index;
    const theme = mergeDeep(rootTheme.floating.item, customTheme);

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
  },
);
DropdownItem.displayName = 'DropdownItem';
