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
import { Radio } from '../Radio/Radio';
import { useDropdownContext } from './DropdownContext';
import type { FlowbiteDropdownItemTheme } from './DropdownItem';

export type DropdownItemRadioProps<T extends ElementType = 'button'> = {
  label: string;
  value?: string;
  name?: string;
  icon?: FC<ComponentProps<'svg'>>;
  onClick?: () => void;
  theme?: DeepPartial<FlowbiteDropdownItemTheme>;
} & ComponentPropsWithoutRef<T>;

export const DropdownItemRadio = forwardRef(function DropdownItemRadio<T extends ElementType = 'button'>(
  {
    label,
    value,
    name = 'radiogroup',
    children,
    className,
    icon: Icon,
    onClick,
    theme: customTheme = {},
    ...props
  }: DropdownItemRadioProps<T>,
  inputRef: Ref<HTMLInputElement>,
) {
  const { ref, index } = useListItem({
    label: typeof children === 'string' ? children : undefined,
  });
  const { activeIndex, checkedInputs, setCheckedInputs, getItemProps, handleSelect } = useDropdownContext();
  const inputId = label + index;
  const isActive = activeIndex === index;
  const isChecked = checkedInputs.radios[name] === inputId;
  const theme = mergeDeep(getTheme().dropdown.floating.item, customTheme);

  const theirProps = props as ButtonBaseProps<T>;

  const handleRadioSelect = useCallback(
    (index: number | null, inputId: string, radioGroup: string) => {
      setCheckedInputs((prev) => {
        return {
          ...prev,
          radios: { ...prev.radios, [radioGroup]: inputId },
        };
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
              handleRadioSelect(index, inputId, name);
            },
          })}
          tabIndex={isActive ? 0 : -1}
        >
          <Radio
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
