import type { ComponentProps, FC, KeyboardEvent, MouseEvent } from 'react';
import { useId } from 'react';
import classNames from 'classnames';

export type ToggleSwitchProps = Omit<ComponentProps<'button'>, 'onChange'> & {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
};

export const ToggleSwitch: FC<ToggleSwitchProps> = ({
  checked,
  className,
  disabled,
  label,
  name,
  onChange,
  ...props
}) => {
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
        className={classNames(
          'group relative flex items-center rounded-lg focus:outline-none',
          {
            'cursor-not-allowed opacity-50': disabled,
            'cursor-pointer': !disabled,
          },
          className,
        )}
        {...props}
      >
        <div
          className={classNames(
            'toggle-bg h-6 w-11 rounded-full border group-focus:ring-4 group-focus:ring-blue-500/25',
            checked
              ? 'border-blue-700 bg-blue-700 after:translate-x-full after:border-white'
              : 'border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700',
          )}
        />
        <span
          data-testid="flowbite-toggleswitch-label"
          id={`${id}-flowbite-toggleswitch-label`}
          className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </span>
      </button>
    </>
  );
};
