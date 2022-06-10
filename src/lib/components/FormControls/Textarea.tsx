import classNames from 'classnames';
import type { ComponentProps, FC, ReactNode } from 'react';

type Color = 'base' | 'green' | 'red';

export type TextareaProps = ComponentProps<'textarea'> & {
  shadow?: boolean;
  helperText?: ReactNode;
  color?: Color;
};

const colorClasses: Record<Color, { input: string; helperText: string }> = {
  base: {
    input:
      'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
    helperText: 'text-gray-500 dark:text-gray-400',
  },
  green: {
    input:
      'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500',
    helperText: 'text-green-600 dark:text-green-500',
  },
  red: {
    input:
      'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
    helperText: 'text-red-600 dark:text-red-500',
  },
};

export const Textarea: FC<TextareaProps> = ({ className, shadow, helperText, color = 'base', ...props }) => (
  <>
    <textarea
      className={classNames(
        'block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50',
        colorClasses[color].input,
        {
          'shadow-sm dark:shadow-sm-light': shadow,
        },
        className,
      )}
      {...props}
    />
    {helperText && <p className={classNames('mt-2 text-sm', colorClasses[color].helperText)}>{helperText}</p>}
  </>
);
