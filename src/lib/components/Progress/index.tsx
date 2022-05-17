import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

type Color = 'dark' | 'blue' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple';
type Size = 'sm' | 'md' | 'lg' | 'xl';

export type ProgressProps = PropsWithChildren<{
  className?: string;
  progress: number;
  color?: Color;
  size?: Size;
  label?: string;
  labelPosition?: 'inside' | 'outside';
  labelProgress?: boolean;
}>;

const colorClasses: Record<Color, string> = {
  dark: 'bg-gray-600 dark:bg-gray-300',
  blue: 'bg-blue-600 dark:bg-blue-600',
  red: 'bg-red-600 dark:bg-red-500',
  green: 'bg-green-600 dark:bg-green-500',
  yellow: 'bg-yellow-400 dark:bg-yellow-400',
  indigo: 'bg-indigo-600 dark:bg-indigo-500',
  purple: 'bg-purple-600 dark:bg-purple-500',
};
const sizeClasses: Record<Size, string> = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
  xl: 'h-6',
};
export const Progress: FC<ProgressProps> = ({
  className,
  progress,
  color = 'blue',
  size = 'md',
  label,
  labelPosition = 'inside',
  labelProgress = false,
}) => {
  return (
    <div>
      {label && labelPosition === 'outside' && (
        <div className="mb-1 flex justify-between">
          <span className="font-medium dark:text-white">{label}</span>
          {labelProgress && <span className="font-medium dark:text-white">{progress}%</span>}
        </div>
      )}
      <div
        className={classNames('w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700', sizeClasses[size])}
      >
        <div
          className={classNames(
            'flex items-center justify-center rounded-full text-center font-medium leading-none text-blue-100',
            colorClasses[color],
            sizeClasses[size],
            className,
          )}
          style={{ width: `${progress}%` }}
        >
          {label && labelPosition === 'inside' && label}
        </div>
      </div>
    </div>
  );
};
