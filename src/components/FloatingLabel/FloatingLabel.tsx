import type { ComponentProps } from 'react';
<<<<<<< HEAD
import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '~/src/helpers/merge-deep';
import type { DeepPartial, FlowbiteSizes } from '../../';
import { useTheme } from '../../';

export interface FlowbiteFloatingLabelTheme {
  filled_error?: string;
  outlined_error?: string;
  standard_error?: string;
  filled_success?: string;
  outlined_success?: string;
  standard_success?: string;
  filled_error_sm?: string;
  outlined_error_sm?: string;
  standard_error_sm?: string;
  filled_success_sm?: string;
  outlined_success_sm?: string;
  standard_success_sm?: string;
  filled_success_label?: string;
  outlined_success_label?: string;
  standard_success_label?: string;
  filled_success_label_sm?: string;
  outlined_success_label_sm?: string;
  standard_success_label_sm?: string;
  filled_error_label?: string;
  outlined_error_label?: string;
  standard_error_label?: string;
  filled_error_label_sm?: string;
  outlined_error_label_sm?: string;
  standard_error_label_sm?: string;
  success_helptext?: string;
  error_helptext?: string;
  default_filled?: string;
  default_filled_label?: string;
  default_outlined?: string;
  default_outlined_label?: string;
  default_standard?: string;
  default_standard_label?: string;
  default_helperText?: string;
  default_filled_sm?: string;
  default_filled_label_sm?: string;
  default_outlined_sm?: string;
  default_outlined_label_sm?: string;
  default_standard_sm?: string;
  default_standard_label_sm?: string;
}

export interface FlowbiteFloatingLabelSizes extends Pick<FlowbiteSizes, 'sm' | 'md'> {
  [key: string]: string;
}

export interface FloatingLabelProps extends Omit<ComponentProps<'input'>, 'ref' | 'color'> {
  color?: string | null;
  helperText?: string;
  sizing?: keyof FlowbiteFloatingLabelSizes;
  variant: string;
  label: string;
  disabled?: boolean;
  theme?: DeepPartial<FlowbiteFloatingLabelTheme>;
}

export const FloatingLabel = forwardRef<HTMLInputElement, FloatingLabelProps>(
  (
    {
      color = null,
      helperText,
      sizing = 'md',
      variant,
      label,
      disabled = false,
      className,
      theme: customTheme = {},
      ...props
=======
import {forwardRef} from 'react';
import type {FlowbiteSizes } from '../../';

export interface FlowbiteFloatingLabelSizes extends Pick<FlowbiteSizes, 'sm' | 'md' > {
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
    (
        {
            error = null,
            helperText,
            sizing= "md",
            buttonStyle,
            label,
            disabled= false,
            ...props
        },
        ref,
    ) => {
        const inputColor = (error === false) ? "green-600" : (error === null ? "gray-400" : "red-600");

        const filledStyles = `block rounded-t-lg px-2.5 pb-2.5 pt-${sizing === "sm"?"4":"5"} w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-${inputColor} dark:border-${inputColor} appearance-none dark:text-white dark:focus:border-${inputColor} focus:outline-none focus:ring-0 focus:border-${inputColor} peer`
        const outlinedStyles = `block px-2.5 pb-2.5 pt-${sizing === "sm"?"3":"4"} w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-${inputColor} appearance-none dark:text-white dark:border-${inputColor} dark:focus:border-${inputColor} focus:outline-none focus:ring-0 focus:border-${inputColor} peer`
        const standardStyles = `block py-${sizing === "sm"?"2":"2.5"} px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-${inputColor} appearance-none dark:text-white dark:border-${inputColor} dark:focus:border-${inputColor} focus:outline-none focus:ring-0 focus:border-${inputColor} peer`

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
                    <input type="text"
                           id={props.id? props.id : "floatingLabel"+ randomId }
                           aria-describedby="floatingLabelInputHelp"
                           className={`${buttonTheme}`}
                           placeholder=" "
                           data-testid="floating-label"
                           disabled={disabled}
                           {...props}
                           ref={ref}/>
                    <label htmlFor={props.id? props.id : "floatingLabel" + randomId}
                           className={`absolute text-sm text-${inputColor} dark:text-${inputColor} duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}>
                        {label}
                    </label>
                </div>
                <p id="floatingLabelInputHelp" className={`mt-2 text-xs text-${inputColor} dark:text-${inputColor}`}> {helperText}</p>
            </div>
        );
>>>>>>> 49d5804 (feat: wrote tests for the the Floating label component)
    },
    ref,
  ) => {
    const theme = mergeDeep(useTheme().theme.floatingLabel, customTheme);
    const randomId = useId();

    if (sizing === 'md') {
      return (
        <>
          {color === null && (
            <div>
              {variant === 'filled' && (
                <div className="relative">
                  <input
                    type="text"
                    id={props.id ? props.id : 'floatingLabel' + randomId}
                    className={twMerge(theme.default_filled, className)}
                    placeholder=" "
                    data-testid="floating-label-1"
                    disabled={disabled}
                    {...props}
                    ref={ref}
                  />
                  <label
                    htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
                    className={twMerge(theme.default_filled_label, className)}
                  >
                    {label}
                  </label>
                </div>
              )}
              {variant === 'outlined' && (
                <div className="relative">
                  <input
                    type="text"
                    id={props.id ? props.id : 'floatingLabel' + randomId}
                    className={twMerge(theme.default_outlined, className)}
                    placeholder=" "
                    data-testid="floating-label-2"
                    disabled={disabled}
                    {...props}
                    ref={ref}
                  />
                  <label
                    htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
                    className={twMerge(theme.default_outlined_label, className)}
                  >
                    {label}
                  </label>
                </div>
              )}
              {variant === 'standard' && (
                <div className="relative z-0">
                  <input
                    type="text"
                    id={props.id ? props.id : 'floatingLabel' + randomId}
                    className={twMerge(theme.default_standard, className)}
                    placeholder=" "
                    data-testid="floating-label-3"
                    disabled={disabled}
                    {...props}
                    ref={ref}
                  />
                  <label
                    htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
                    className={twMerge(theme.default_standard_label, className)}
                  >
                    {label}
                  </label>
                </div>
              )}
              <p id={'helper_text' + randomId} className={twMerge(theme.default_helperText, className)}>
                {' '}
                {helperText}
              </p>
            </div>
          )}

          {color !== null && (
            <div>
              {variant === 'filled' && (
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      id={props.id ? props.id : 'floatingLabel' + randomId}
                      aria-describedby="filled_success_help"
                      className={twMerge(color === 'success' ? theme.filled_success : theme.filled_error, className)}
                      placeholder=" "
                      data-testid="floating-label-4"
                      disabled={disabled}
                      {...props}
                      ref={ref}
                    />
                    <label
                      htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
                      className={twMerge(
                        color === 'success' ? theme.filled_success_label : theme.filled_error_label,
                        className,
                      )}
                    >
                      {label}
                    </label>
                  </div>
                  <p
                    id={'filled_helper_text' + randomId}
                    className={twMerge(color === 'success' ? theme.success_helptext : theme.error_helptext, className)}
                  >
                    {helperText}
                  </p>
                </div>
              )}
              {variant === 'outlined' && (
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      id={props.id ? props.id : 'floatingLabel' + randomId}
                      aria-describedby="outlined_success_help"
                      className={twMerge(
                        color === 'success' ? theme.outlined_success : theme.outlined_error,
                        className,
                      )}
                      placeholder=" "
                      data-testid="floating-label-5"
                      disabled={disabled}
                      {...props}
                      ref={ref}
                    />
                    <label
                      htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
                      className={twMerge(
                        color === 'success' ? theme.outlined_success_label : theme.outlined_error_label,
                        className,
                      )}
                    >
                      {label}
                    </label>
                  </div>
                  <p
                    id={'outlined_helper_text' + randomId}
                    className={twMerge(color === 'success' ? theme.success_helptext : theme.error_helptext, className)}
                  >
                    {helperText}
                  </p>
                </div>
              )}
              {variant === 'standard' && (
                <div>
                  <div className="relative z-0">
                    <input
                      type="text"
                      id={props.id ? props.id : 'floatingLabel' + randomId}
                      aria-describedby="standard_success_help"
                      className={twMerge(
                        color === 'success' ? theme.standard_success : theme.standard_error,
                        className,
                      )}
                      placeholder=" "
                      data-testid="floating-label-6"
                      disabled={disabled}
                      {...props}
                      ref={ref}
                    />
                    <label
                      htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
                      className={twMerge(
                        color === 'success' ? theme.standard_success_label : theme.standard_error_label,
                        className,
                      )}
                    >
                      {label}
                    </label>
                  </div>
                  <p
                    id={'standard_helper_text' + randomId}
                    className={twMerge(color === 'success' ? theme.success_helptext : theme.error_helptext, className)}
                  >
                    {helperText}
                  </p>
                </div>
              )}
            </div>
          )}
        </>
      );
    } else {
      return (
        <>
          {color === null && (
            <div>
              {variant === 'filled' && (
                <div className="relative">
                  <input
                    type="text"
                    id={props.id ? props.id : 'floatingLabel' + randomId}
                    className={twMerge(theme.default_filled_sm, className)}
                    placeholder=" "
                    data-testid="floating-label-1"
                    disabled={disabled}
                    {...props}
                    ref={ref}
                  />
                  <label
                    htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
                    className={twMerge(theme.default_filled_label_sm, className)}
                  >
                    {label}
                  </label>
                </div>
              )}
              {variant === 'outlined' && (
                <div className="relative">
                  <input
                    type="text"
                    id={props.id ? props.id : 'floatingLabel' + randomId}
                    className={twMerge(theme.default_outlined_sm, className)}
                    placeholder=" "
                    data-testid="floating-label-2"
                    disabled={disabled}
                    {...props}
                    ref={ref}
                  />
                  <label
                    htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
                    className={twMerge(theme.default_outlined_label_sm, className)}
                  >
                    {label}
                  </label>
                </div>
              )}
              {variant === 'standard' && (
                <div className="relative z-0">
                  <input
                    type="text"
                    id={props.id ? props.id : 'floatingLabel' + randomId}
                    className={twMerge(theme.default_standard_sm, className)}
                    placeholder=" "
                    data-testid="floating-label-3"
                    disabled={disabled}
                    {...props}
                    ref={ref}
                  />
                  <label
                    htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
                    className={twMerge(theme.default_standard_label_sm, className)}
                  >
                    {label}
                  </label>
                </div>
              )}
              <p id={'helper_text' + randomId} className={twMerge(theme.default_helperText, className)}>
                {helperText}
              </p>
            </div>
          )}

          {color !== null && (
            <div>
              {variant === 'filled' && (
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      id={props.id ? props.id : 'floatingLabel' + randomId}
                      aria-describedby="filled_success_help"
                      className={twMerge(
                        color === 'success' ? theme.filled_success_sm : theme.filled_error_sm,
                        className,
                      )}
                      placeholder=" "
                      data-testid="floating-label-4"
                      disabled={disabled}
                      {...props}
                      ref={ref}
                    />
                    <label
                      htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
                      className={twMerge(
                        color === 'success' ? theme.filled_success_label_sm : theme.filled_error_label_sm,
                        className,
                      )}
                    >
                      {label}
                    </label>
                  </div>
                  <p
                    id={'filled_helper_text' + randomId}
                    className={twMerge(color === 'success' ? theme.success_helptext : theme.error_helptext, className)}
                  >
                    {helperText}
                  </p>
                </div>
              )}
              {variant === 'outlined' && (
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      id={props.id ? props.id : 'floatingLabel' + randomId}
                      aria-describedby="outlined_success_help"
                      className={twMerge(
                        color === 'success' ? theme.outlined_success_sm : theme.outlined_error_sm,
                        className,
                      )}
                      placeholder=" "
                      data-testid="floating-label-5"
                      disabled={disabled}
                      {...props}
                      ref={ref}
                    />
                    <label
                      htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
                      className={twMerge(
                        color === 'success' ? theme.outlined_success_label_sm : theme.outlined_error_label_sm,
                        className,
                      )}
                    >
                      {label}
                    </label>
                  </div>
                  <p
                    id={'outlined_helper_text' + randomId}
                    className={twMerge(color === 'success' ? theme.success_helptext : theme.error_helptext, className)}
                  >
                    {helperText}
                  </p>
                </div>
              )}
              {variant === 'standard' && (
                <div>
                  <div className="relative z-0">
                    <input
                      type="text"
                      id={props.id ? props.id : 'floatingLabel' + randomId}
                      aria-describedby="standard_success_help"
                      className={twMerge(
                        color === 'success' ? theme.standard_success_sm : theme.standard_error_sm,
                        className,
                      )}
                      placeholder=" "
                      data-testid="floating-label-6"
                      disabled={disabled}
                      {...props}
                      ref={ref}
                    />
                    <label
                      htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
                      className={twMerge(
                        color === 'success' ? theme.standard_success_label_sm : theme.standard_error_label_sm,
                        className,
                      )}
                    >
                      {label}
                    </label>
                  </div>
                  <p
                    id={'standard_helper_text' + randomId}
                    className={twMerge(color === 'success' ? theme.success_helptext : theme.error_helptext, className)}
                  >
                    {helperText}
                  </p>
                </div>
              )}
            </div>
          )}
        </>
      );
    }
  },
);

FloatingLabel.displayName = 'FloatingLabel';
