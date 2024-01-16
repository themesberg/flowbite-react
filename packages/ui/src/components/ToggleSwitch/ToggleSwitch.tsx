import type { ComponentProps, KeyboardEvent } from 'react';
import { useId, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { FlowbiteBoolean, FlowbiteColors } from '../Flowbite';
import type { FlowbiteTextInputSizes } from '../TextInput';

export interface FlowbiteToggleSwitchTheme {
  root: FlowbiteToggleSwitchRootTheme;
  toggle: FlowbiteToggleSwitchToggleTheme;
}

export interface FlowbiteToggleSwitchRootTheme {
  base: string;
  active: FlowbiteBoolean;
  label: string;
}

export interface FlowbiteToggleSwitchToggleTheme {
  base: string;
  sizes: FlowbiteTextInputSizes;
  checked: FlowbiteBoolean & {
    color: FlowbiteColors;
  };
}

export type ToggleSwitchProps = Omit<ComponentProps<'button'>, 'onChange' | 'ref'> & {
  checked: boolean;
  color?: keyof FlowbiteColors;
  sizing?: keyof FlowbiteTextInputSizes;
  label?: string;
  onChange: (checked: boolean) => void;
  theme?: DeepPartial<FlowbiteToggleSwitchTheme>;
};

export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
  (
    {
      checked,
      className,
      color = 'blue',
      sizing = 'md',
      disabled,
      label,
      name,
      onChange,
      theme: customTheme = {},
      ...props
    },
    ref,
  ) => {
    const id = useId();
    const theme = mergeDeep(getTheme().toggleSwitch, customTheme);

    const toggle = (): void => onChange(!checked);

    const handleClick = (): void => {
      toggle();
    };

    const handleOnKeyDown = (event: KeyboardEvent<HTMLButtonElement>): void => {
      if (event.code == 'Enter') {
        event.preventDefault();
      }
    };

    return (
      <>
        {name && checked ? (
          <input ref={ref} checked={checked} hidden name={name} readOnly type="checkbox" className="sr-only" />
        ) : null}
        <button
          aria-checked={checked}
          aria-labelledby={`${id}-flowbite-toggleswitch-label`}
          disabled={disabled}
          id={`${id}-flowbite-toggleswitch`}
          onClick={handleClick}
          onKeyDown={handleOnKeyDown}
          role="switch"
          tabIndex={0}
          type="button"
          className={twMerge(theme.root.base, theme.root.active[disabled ? 'off' : 'on'], className)}
          {...props}
        >
          <div
            data-testid="flowbite-toggleswitch-toggle"
            className={twMerge(
              theme.toggle.base,
              theme.toggle.checked[checked ? 'on' : 'off'],
              checked && theme.toggle.checked.color[color],
              theme.toggle.sizes[sizing],
            )}
          />
          {label?.length ? (
            <span
              data-testid="flowbite-toggleswitch-label"
              id={`${id}-flowbite-toggleswitch-label`}
              className={theme.root.label}
            >
              {label}
            </span>
          ) : null}
        </button>
      </>
    );
  },
);

ToggleSwitch.displayName = 'ToggleSwitch';
