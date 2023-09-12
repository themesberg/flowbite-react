import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import type { FlowbiteSizes } from '../../';

export interface FlowbiteFloatingLabelSizes extends Pick<FlowbiteSizes, 'sm' | 'md'> {
  [key: string]: string;
}

export interface FloatingLabelProps extends Omit<ComponentProps<'input'>, 'ref' | 'color'> {
  error?: boolean;
  helperText?: string;
  sizing?: keyof FlowbiteFloatingLabelSizes;
  buttonStyle: string;
  label: string;
  disabled?: boolean;
}

export const FloatingLabel = forwardRef<HTMLInputElement, FloatingLabelProps>(
  ({ error = null, helperText, sizing = 'md', buttonStyle, label, disabled = false, ...props }, ref) => {
    const inputColor = error === false ? 'green-600' : error === null ? 'gray-400' : 'red-600';

    const filledStyles = `block rounded-t-lg px-2.5 pb-2.5 pt-${
      sizing === 'sm' ? '4' : '5'
    } w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-${inputColor} dark:border-${inputColor} appearance-none dark:text-white dark:focus:border-${inputColor} focus:outline-none focus:ring-0 focus:border-${inputColor} peer`;
    const outlinedStyles = `block px-2.5 pb-2.5 pt-${
      sizing === 'sm' ? '3' : '4'
    } w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-${inputColor} appearance-none dark:text-white dark:border-${inputColor} dark:focus:border-${inputColor} focus:outline-none focus:ring-0 focus:border-${inputColor} peer`;
    const standardStyles = `block py-${
      sizing === 'sm' ? '2' : '2.5'
    } px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-${inputColor} appearance-none dark:text-white dark:border-${inputColor} dark:focus:border-${inputColor} focus:outline-none focus:ring-0 focus:border-${inputColor} peer`;

    let buttonTheme;

    if (buttonStyle === 'filled') {
      buttonTheme = filledStyles;
    } else if (buttonStyle === 'outlined') {
      buttonTheme = outlinedStyles;
    } else {
      buttonTheme = standardStyles;
    }
    const randomId = Math.random().toString(36).substring(6);
    return (
      <div>
        <div className="relative">
          <input
            type="text"
            id={props.id ? props.id : 'floatingLabel' + randomId}
            aria-describedby="floatingLabelInputHelp"
            className={`${buttonTheme}`}
            placeholder=" "
            data-testid="floating-label"
            disabled={disabled}
            {...props}
            ref={ref}
          />
          <label
            htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
            className={`absolute text-sm text-${inputColor} dark:text-${inputColor} left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900`}
          >
            {label}
          </label>
        </div>
        <p id="floatingLabelInputHelp" className={`mt-2 text-xs text-${inputColor} dark:text-${inputColor}`}>
          {' '}
          {helperText}
        </p>
      </div>
    );
  },
);

FloatingLabel.displayName = 'FloatingLabel';
