import classNames from 'classnames';
import type { ComponentProps, FC, KeyboardEvent, MouseEvent } from 'react';
import { useId } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';

export type ToggleSwitchProps = Omit<ComponentProps<'button'>, 'onChange' | 'className'> & {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
};

export const ToggleSwitch: FC<ToggleSwitchProps> = ({ checked, disabled, label, name, onChange, ...props }) => {
  const theme = useTheme().theme.formControls.toggleSwitch;
  const theirProps = excludeClassName(props);
  const id = useId();

  const toggle = (): void => onChange(!checked);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    toggle();
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  return (
    <>
      {name && checked && <input checked={checked} hidden name={name} readOnly type="checkbox" className="sr-only" />}
      <button
        aria-checked={checked}
        aria-labelledby={`${id}-flowbite-toggleswitch-label`}
        disabled={disabled}
        id={`${id}-flowbite-toggleswitch`}
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        role="switch"
        tabIndex={0}
        type="button"
        className={classNames(theme.base, theme.active[disabled ? 'off' : 'on'])}
        {...theirProps}
      >
        <div className={classNames(theme.toggle.base, theme.toggle.checked[checked ? 'on' : 'off'])} />
        <span
          data-testid="flowbite-toggleswitch-label"
          id={`${id}-flowbite-toggleswitch-label`}
          className={theme.label}
        >
          {label}
        </span>
      </button>
    </>
  );
};
