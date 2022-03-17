import { ComponentProps, FC } from 'react';
import classNames from 'classnames';

export type ToggleSwitchProps = ComponentProps<'input'> & {
  label: string;
};

export const ToggleSwitch: FC<ToggleSwitchProps> = ({ className, label, id, disabled, ...props }) => (
  <label
    htmlFor={id}
    className={classNames(
      'relative flex items-center',
      {
        'cursor-not-allowed opacity-50': disabled,
        'cursor-pointer': !disabled,
      },
      className,
    )}
  >
    <input type="checkbox" id={id} className="sr-only" disabled={disabled} {...props} />
    <div className="toggle-bg h-6 w-11 rounded-full border border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700" />
    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
  </label>
);
