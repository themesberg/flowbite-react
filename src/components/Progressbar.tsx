import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

type Color = 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple';
type Size = 'sm' | 'md' | 'lg' | 'xl';

export type ProgressbarProps = PropsWithChildren<{
  className?: string;
  progress?: number;
  color?: Color;
  size?: Size;
  label?: string;
  labelPosition?: 'inside' | 'outside';
  labelProgress?: boolean;
  labelSize?: Size;
  labelColor?: Color;
}>;

const colorClasses: Record<Color, string> = {
  blue: 'bg-blue-600',
  red: 'bg-red-600',
  purple: 'bg-purple-600',
  gray: 'bg-gray-600',
  green: 'bg-green-600',
  yellow: 'bg-yellow-400',
  indigo: 'bg-indigo-600',
};
const sizeClasses: Record<Size, string> = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
  xl: 'h-6',
};
const labelSizeClasses: Record<Size, string> = {
  sm: 'text-xs',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
};
const lableColorClasses: Record<Color, string> = {
  blue: 'text-blue-600',
  red: 'text-red-600',
  purple: 'text-purple-600',
  gray: 'text-gray-600',
  green: 'text-green-600',
  yellow: 'text-yellow-400',
  indigo: 'text-indigo-600',
};
export const Progressbar: FC<ProgressbarProps> = ({
  className,
  progress = 45,
  color = 'blue',
  size = 'md',
  label,
  labelPosition = 'inside',
  labelProgress = false,
  labelSize = 'md',
  labelColor = 'blue',
}) => {
  return (
    <>
      {label && labelPosition === 'outside' && (
        <div className="mb-1 flex justify-between">
          <span
            className={classNames(
              'font-medium dark:text-white',
              labelSizeClasses[labelSize],
              lableColorClasses[labelColor],
            )}
          >
            {label}
          </span>
          {labelProgress && (
            <span
              className={classNames(
                'font-medium dark:text-white',
                labelSizeClasses[labelSize],
                lableColorClasses[labelColor],
              )}
            >
              {progress}%
            </span>
          )}
        </div>
      )}
      <div className={classNames('w-full rounded-full bg-gray-200 dark:bg-gray-700 ', sizeClasses[size])}>
        <div
          className={classNames(
            'rounded-full text-center font-medium leading-none text-blue-100',
            colorClasses[color],
            sizeClasses[size],
            className,
            labelSizeClasses[labelSize],
            lableColorClasses[labelColor],
          )}
          style={{ width: progress + '%' }}
        >
          {label && labelPosition == 'inside' && label}
        </div>
      </div>
    </>
  );
};
