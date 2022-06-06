import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';

type Color = 'gray' | 'green' | 'red';

export interface LabelProps extends PropsWithChildren<ComponentProps<'label'>> {
  color?: Color;
  value?: string;
}

const colorClasses: Record<Color, string> = {
  gray: 'text-gray-900 dark:text-gray-300',
  green: 'text-green-700 dark:text-green-500',
  red: 'text-red-700 dark:text-red-500',
};

export const Label: FC<LabelProps> = ({ children, color = 'gray', className, value, ...props }): JSX.Element => {
  return (
    <label className={classNames('text-sm font-medium', colorClasses[color], className)} {...props}>
      {value ?? children ?? ''}
    </label>
  );
};
