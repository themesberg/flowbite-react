import classNames from 'classnames';
import { useId } from 'react';
import { ComponentProps, FC, PropsWithChildren } from 'react';
import { FlowbiteColors, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';

import { useTheme } from '../Flowbite/ThemeContext';
export interface ProgressProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>> {
  size?: keyof ProgressSizes;
  label?: string;
  labelPosition?: 'inside' | 'outside';
  labelProgress?: boolean;
  progress: number;
}
export interface ProgressColor
  extends Pick<FlowbiteColors, 'dark' | 'blue' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple'> {
  [key: string]: string;
}
export interface ProgressSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

export const Progress: FC<ProgressProps> = ({
  color = 'blue',
  label = '',
  labelPosition = 'inside',
  labelProgress = false,
  progress,
  size = 'md',
  ...props
}): JSX.Element => {
  const id = useId();
  const theme = useTheme().theme.progress;

  return (
    <>
      <span id={`${id}-flowbite-progress`} className="sr-only">
        {label}
      </span>
      <div
        aria-labelledby={`${id}-flowbite-progress`}
        aria-valuenow={progress}
        aria-label="progressbar"
        role="progressbar"
        {...props}
      >
        {label && labelPosition === 'outside' && (
          <div className={theme.label}>
            <span>{label}</span>
            {labelProgress && <span>{progress}%</span>}
          </div>
        )}
        <div className={classNames(theme.base, theme.size[size])}>
          <div
            className={classNames(theme.bar, theme.color[color], theme.size[size])}
            style={{ width: `${progress}%` }}
          >
            {label && labelPosition === 'inside' && label}
          </div>
        </div>
      </div>
    </>
  );
};
