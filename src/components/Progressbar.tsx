import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

type Color = 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple';
type Size = 'sm' | 'md' | 'lg' | 'xl';
type TextSize = 'sm' | 'md' | 'lg' | 'xl';
type TextColor = 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple';

export type ProgressbarProps = PropsWithChildren<{
  className?: string;
  progress?: number;
  color?: Color;
  size?: Size;
  label?: string;
  labelPosition?: 'inside' | 'outside';
  labelProgress?: boolean;
  labelSize?: TextSize;
  labelColor?: TextColor;
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
  sm: 'text-xs font-medium text-blue-100 text-center p-0.5 leading-none',
  md: 'text-xs font-medium text-blue-100 text-center p-0.5 leading-none',
  lg: 'text-xs font-medium text-blue-100 text-center p-0.5 leading-none',
  xl: 'text-xs font-medium text-blue-100 text-center p-0.5 leading-none',
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
          <span className="text-base font-medium text-blue-700 dark:text-white">{label}</span>
          {labelProgress && <span className="text-sm font-medium text-blue-700 dark:text-white">{progress}%</span>}
        </div>
      )}
      <div className={classNames('w-full rounded-full bg-gray-200 dark:bg-gray-700 ', sizeClasses[size])}>
        <div
          className={classNames(
            'rounded-full',
            colorClasses[color],
            sizeClasses[size],
            labelSizeClasses[labelSize],
            className,
          )}
          style={{ width: progress + '%' }}
        >
          {label && labelPosition == 'inside' && label}
        </div>
      </div>
    </>
  );
};
