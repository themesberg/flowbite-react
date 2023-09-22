import type { ComponentProps } from 'react';
<<<<<<< HEAD
import { forwardRef } from 'react';
import type { FlowbiteSizes } from '../../';

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
}

export const FloatingLabel = forwardRef<HTMLInputElement, FloatingLabelProps>(
  ({ color = null, helperText, sizing = 'md', variant, label, disabled = false, ...props }, ref) => {
    const inputColor = color === 'success' ? 'green' : 'red';
=======
import {forwardRef} from 'react';
import type {FlowbiteSizes } from '../../';

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
<<<<<<< HEAD
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
>>>>>>> 4dc011c (feat: wrote tests for the the Floating label component)

    const size_class = sizing === 'md' ? 'text-sm' : sizing !== null ? 'text-xs' : 'text-sm';
    const randomId = Math.random().toString(36).substring(6);

    const filled_error = `block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full ${size_class} text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white dark:border-red-500 focus:outline-none focus:ring-0 border-red-600 focus:border-red-600 dark:focus-border-red-500 peer`;
    const outlined_error = `block px-2.5 pb-2.5 pt-4 w-full ${size_class} text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer`;
    const standard_error = `block py-2.5 px-0 w-full ${size_class} text-gray-900 bg-transparent border-0 border-b-2 border-red-600 appearance-none dark:text-white dark:border-red-500 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer`;

<<<<<<< HEAD
    const filled_success = `block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full ${size_class} text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer`;
    const outlined_success = `block px-2.5 pb-2.5 pt-4 w-full ${size_class} text-gray-900 bg-transparent rounded-lg border-1 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer`;
    const standard_success = `block py-2.5 px-0 w-full ${size_class} text-gray-900 bg-transparent border-0 border-b-2 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer`;
    return (
      <>
        {color === null && (
          <div>
            {variant === 'filled' && (
=======
  ({ error = null, helperText, sizing = 'md', buttonStyle, label, disabled = false, ...props }, ref) => {
    const inputColor = error === false ? 'green' : 'red';

    const size_class = sizing === 'md' ? 'text-sm' : sizing !== null ? 'text-xs' : 'text-sm';
    const randomId = Math.random().toString(36).substring(6);

    const filled_error =
      'block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white dark:border-red-500 focus:outline-none focus:ring-0 border-red-600 focus:border-red-600 dark:focus-border-red-500 peer';
    const outlined_error =
      'block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer';
    const standard_error =
      'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-red-600 appearance-none dark:text-white dark:border-red-500 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer';

    const filled_success = `block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full ${size_class} text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer`;
    const outlined_success = `block px-2.5 pb-2.5 pt-4 w-full ${size_class} text-gray-900 bg-transparent rounded-lg border-1 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer`;
    const standard_success = `block py-2.5 px-0 w-full ${size_class} text-gray-900 bg-transparent border-0 border-b-2 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer`;
    return (
      <>
        {error === null && (
          <div>
            {buttonStyle === 'filled' && (
>>>>>>> 7e8cf5d (fix: updated code to fix the validation styles)
              <div className="relative">
                <input
                  type="text"
                  id={props.id ? props.id : 'floatingLabel' + randomId}
<<<<<<< HEAD
                  className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 ${size_class} text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500`}
                  placeholder=" "
                  data-testid="floating-label-1"
=======
                  className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500`}
                  placeholder=" "
                  data-testid="floating-label"
>>>>>>> 7e8cf5d (fix: updated code to fix the validation styles)
                  disabled={disabled}
                  {...props}
                  ref={ref}
                />
                <label
                  htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
<<<<<<< HEAD
                  className={`absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform ${size_class} text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500`}
=======
                  className={`absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500`}
>>>>>>> 7e8cf5d (fix: updated code to fix the validation styles)
                >
                  {label}
                </label>
              </div>
            )}
<<<<<<< HEAD
            {variant === 'outlined' && (
=======
            {buttonStyle === 'outlined' && (
>>>>>>> 7e8cf5d (fix: updated code to fix the validation styles)
              <div className="relative">
                <input
                  type="text"
                  id={props.id ? props.id : 'floatingLabel' + randomId}
<<<<<<< HEAD
                  className={`border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 ${size_class} text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500`}
                  placeholder=" "
                  data-testid="floating-label-2"
=======
                  className={`border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500`}
                  placeholder=" "
                  data-testid="floating-label"
>>>>>>> 7e8cf5d (fix: updated code to fix the validation styles)
                  disabled={disabled}
                  {...props}
                  ref={ref}
                />
                <label
                  htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
<<<<<<< HEAD
                  className={`absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 ${size_class} text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500`}
=======
                  className={`absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500`}
>>>>>>> 7e8cf5d (fix: updated code to fix the validation styles)
                >
                  {label}
                </label>
              </div>
            )}
<<<<<<< HEAD
            {variant === 'standard' && (
=======
            {buttonStyle === 'standard' && (
>>>>>>> 7e8cf5d (fix: updated code to fix the validation styles)
              <div className="relative z-0">
                <input
                  type="text"
                  id={props.id ? props.id : 'floatingLabel' + randomId}
<<<<<<< HEAD
                  className={`peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 ${size_class} text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500`}
                  placeholder=" "
                  data-testid="floating-label-3"
=======
                  className={`peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500`}
                  placeholder=" "
                  data-testid="floating-label"
>>>>>>> 7e8cf5d (fix: updated code to fix the validation styles)
                  disabled={disabled}
                  {...props}
                  ref={ref}
                />
                <label
                  htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
<<<<<<< HEAD
                  className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform ${size_class} text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500`}
=======
                  className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500`}
>>>>>>> 7e8cf5d (fix: updated code to fix the validation styles)
                >
                  {label}
                </label>
              </div>
            )}
            <p id={`helperText-${randomId}`} className={`mt-2 text-xs text-${inputColor} dark:text-${inputColor}`}>
              {' '}
              {helperText}
            </p>
          </div>
        )}

<<<<<<< HEAD
        {color !== null && (
          <div>
            {variant === 'filled' && (
=======
        {error !== null && (
          <div>
            {buttonStyle === 'filled' && (
>>>>>>> 7e8cf5d (fix: updated code to fix the validation styles)
              <div>
                <div className="relative">
                  <input
                    type="text"
                    id={props.id ? props.id : 'floatingLabel' + randomId}
                    aria-describedby="filled_success_help"
<<<<<<< HEAD
                    className={color === 'success' ? filled_success : filled_error}
                    placeholder=" "
                    data-testid="floating-label-4"
=======
                    className={error ? filled_error : filled_success}
                    placeholder=" "
                    data-testid="floating-label"
>>>>>>> 7e8cf5d (fix: updated code to fix the validation styles)
                    disabled={disabled}
                    {...props}
                    ref={ref}
                  />
                  <label
                    htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
<<<<<<< HEAD
                    className={`absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform ${size_class} text-${inputColor}-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-${inputColor}-500`}
                  >
                    {label}
                  </label>
=======
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
>>>>>>> 4dc011c (feat: wrote tests for the the Floating label component)
=======
                    className={`absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-${inputColor}-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-${inputColor}-500`}
                  >
                    {label}
                  </label>
>>>>>>> 7e8cf5d (fix: updated code to fix the validation styles)
                </div>
                <p
                  id={`helperText-filled-${randomId}`}
                  className={`mt-2 text-xs text-${inputColor}-600 dark:text-${inputColor}-400`}
                >
                  {helperText}
                </p>
              </div>
            )}
<<<<<<< HEAD
            {variant === 'outlined' && (
=======
            {buttonStyle === 'outlined' && (
>>>>>>> 7e8cf5d (fix: updated code to fix the validation styles)
              <div>
                <div className="relative">
                  <input
                    type="text"
                    id={props.id ? props.id : 'floatingLabel' + randomId}
                    aria-describedby="outlined_success_help"
<<<<<<< HEAD
                    className={color === 'success' ? outlined_success : outlined_error}
                    placeholder=" "
                    data-testid="floating-label-5"
=======
                    className={error ? outlined_error : outlined_success}
                    placeholder=" "
                    data-testid="floating-label"
>>>>>>> 7e8cf5d (fix: updated code to fix the validation styles)
                    disabled={disabled}
                    {...props}
                    ref={ref}
                  />
                  <label
                    htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
<<<<<<< HEAD
                    className={`absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 ${size_class} text-${inputColor}-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-${inputColor}-500`}
=======
                    className={`absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-${inputColor}-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-${inputColor}-500`}
>>>>>>> 7e8cf5d (fix: updated code to fix the validation styles)
                  >
                    {label}
                  </label>
                </div>
                <p
                  id={`helperText-outlined-${randomId}`}
                  className={`mt-2 text-xs text-${inputColor}-600 dark:text-${inputColor}-400`}
                >
                  {helperText}
                </p>
              </div>
            )}
<<<<<<< HEAD
            {variant === 'standard' && (
=======
            {buttonStyle === 'standard' && (
>>>>>>> 7e8cf5d (fix: updated code to fix the validation styles)
              <div>
                <div className="relative z-0">
                  <input
                    type="text"
                    id={props.id ? props.id : 'floatingLabel' + randomId}
                    aria-describedby="standard_success_help"
<<<<<<< HEAD
                    className={color === 'success' ? standard_success : standard_error}
                    placeholder=" "
                    data-testid="floating-label-6"
=======
                    className={error ? standard_error : standard_success}
                    placeholder=" "
                    data-testid="floating-label"
>>>>>>> 7e8cf5d (fix: updated code to fix the validation styles)
                    disabled={disabled}
                    {...props}
                    ref={ref}
                  />
                  <label
                    htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
<<<<<<< HEAD
                    className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform ${size_class} text-${inputColor}-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-${inputColor}-500`}
=======
                    className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-${inputColor}-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-${inputColor}-500`}
>>>>>>> 7e8cf5d (fix: updated code to fix the validation styles)
                  >
                    {label}
                  </label>
                </div>
                <p
                  id={`helperText-standard-${randomId}`}
                  className={`mt-2 text-xs text-${inputColor}-600 dark:text-${inputColor}-400`}
                >
                  {helperText}
                </p>
              </div>
            )}
          </div>
        )}
      </>
    );
  },
);

FloatingLabel.displayName = 'FloatingLabel';
