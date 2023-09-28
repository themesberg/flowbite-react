import type { ComponentProps } from 'react';
import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '~/src/helpers/merge-deep';
import type { DeepPartial, FlowbiteSizes } from '../../';
import { useTheme } from '../../';

export interface FlowbiteFloatingLabelTheme {
  input: any;
  label: any;
  helperText: any;
}

export interface FlowbiteFloatingLabelSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string;
}

export interface FloatingLabelProps extends Omit<ComponentProps<'input'>, 'ref' | 'color'> {
  color?: string;
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
      color = 'default',
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

    return (
      <>
        <div>
          <div className="relative">
            <input
              type="text"
              id={props.id ? props.id : 'floatingLabel' + randomId}
              aria-describedby="outlined_success_help"
              className={twMerge(theme.input[color][variant][sizing], className)}
              placeholder=" "
              data-testid="floating-label"
              disabled={disabled}
              {...props}
              ref={ref}
            />
            <label
              htmlFor={props.id ? props.id : 'floatingLabel' + randomId}
              className={twMerge(theme.label[color][variant][sizing], className)}
            >
              {label}
            </label>
          </div>
          <p id={'outlined_helper_text' + randomId} className={twMerge(theme.helperText[color], className)}>
            {helperText}
          </p>
        </div>
      </>
    );
  },
);

FloatingLabel.displayName = 'FloatingLabel';
