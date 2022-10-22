import classNames from 'classnames';
import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';
import { useTheme } from '../../Flowbite/ThemeContext';
import HelperText from '../HelperText';
import type { TextInputColors, TextInputSizes } from '../TextInput';

export interface FileInputProps extends Omit<ComponentProps<'input'>, 'type' | 'ref' | 'color'> {
  sizing?: keyof TextInputSizes;
  helperText?: ReactNode;
  color?: keyof TextInputColors;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ sizing = 'md', helperText, color = 'gray', className, ...props }, ref) => {
    const theme = useTheme().theme.formControls.fileInput;
    return (
      <>
        <div className={classNames(theme.base, className)}>
          <div className={theme.field.base}>
            <input
              className={classNames(
                theme.field.input.base,
                theme.field.input.colors[color],
                theme.field.input.sizes[sizing],
              )}
              {...props}
              type="file"
              ref={ref}
            />
          </div>
        </div>
        {helperText && <HelperText color={color}>{helperText}</HelperText>}
      </>
    );
  },
);

FileInput.displayName = 'FileInput';
