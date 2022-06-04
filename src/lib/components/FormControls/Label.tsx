import type { ComponentProps, FC } from 'react';
import classNames from 'classnames';

type Color = 'gray' | 'green' | 'red';

export type LabelProps = ComponentProps<'label'> & {
  color?: Color;
};

const colorClasses: Record<Color, string> = {
  gray: 'text-gray-900 dark:text-gray-300',
  green: 'text-green-700 dark:text-green-500',
  red: 'text-red-700 dark:text-red-500',
};

export const Label: FC<LabelProps> = ({ children, color = 'gray', className, ...props }) => (
  <label className={classNames('text-sm font-medium', colorClasses[color], className)} {...props}>
    {children}
  </label>
);
