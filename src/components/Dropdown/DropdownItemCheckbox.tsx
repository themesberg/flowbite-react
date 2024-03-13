'use client';

import { useListItem } from '@floating-ui/react';
import type { ComponentProps, ComponentPropsWithoutRef, ElementType, FC, Ref, RefCallback } from 'react';
import { forwardRef, useCallback } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { ButtonBaseProps } from '../Button/ButtonBase';
import { ButtonBase } from '../Button/ButtonBase';
import { Checkbox } from '../Checkbox/Checkbox';
import { useDropdownContext } from './DropdownContext';
import type { FlowbiteDropdownItemTheme } from './DropdownItem';

export type DropdownItemCheckboxProps<T extends ElementType = 'button'> = {
  label: string;
  value?: string;
  name?: string;
  icon?: FC<ComponentProps<'svg'>>;
  onClick?: () => void;
  theme?: DeepPartial<FlowbiteDropdownItemTheme>;
} & ComponentPropsWithoutRef<T>;

export const DropdownItemCheckbox = forwardRef(function DropdownItemCheckBox<T extends ElementType = 'button'>(
  {
    label,
    value,
    name,
    children,
    className,
    icon: Icon,
    onClick,
    theme: customTheme = {},
    ...props
  }: DropdownItemCheckboxProps<T>,
  inputRef: Ref<HTMLInputElement>,
) {
  const { ref, index } = useListItem({
    label: typeof children === 'string' ? children : undefined,
  });
  const { activeIndex, checkedInputs, setCheckedInputs, getItemProps, handleSelect } = useDropdownContext();
  const inputId = label + index;
  const isActive = activeIndex === index;
  const isChecked = checkedInputs.checkboxes.includes(inputId);
  const theme = mergeDeep(getTheme().dropdown.floating.item, customTheme);

  const theirProps = props as ButtonBaseProps<T>;

  const handleCheckboxSelect = useCallback(
    (index: number | null, inputId: string) => {
      setCheckedInputs((prev) => {
        return prev.checkboxes.includes(inputId)
          ? {
              ...prev,
              checkboxes: prev.checkboxes.filter((item) => item !== inputId),
            }
          : { ...prev, checkboxes: [...prev.checkboxes, inputId] };
      });

      handleSelect(index);
    },
    [handleSelect, setCheckedInputs],
  );

  return (
    <li role="menuitem" className={theme.container}>
      <label htmlFor={inputId}>
        <ButtonBase
          ref={ref as RefCallback<T>}
          className={twMerge(theme.base, className)}
          {...theirProps}
          {...getItemProps({
            onClick: () => {
              onClick && onClick();
              handleCheckboxSelect(index, inputId);
            },
          })}
          tabIndex={isActive ? 0 : -1}
        >
          <Checkbox
            ref={inputRef}
            checked={isChecked}
            value={value || label}
            name={name}
            id={inputId}
            onChange={() => null}
            className={theme.input}
          />
          {Icon && <Icon className={theme.icon} />}
          {children ? children : label}
        </ButtonBase>
      </label>
    </li>
  );
});
