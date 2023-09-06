import type { ComponentProps } from 'react';
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
