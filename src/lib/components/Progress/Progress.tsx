import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useId } from 'react';
import type { FlowbiteColors, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteProgressTheme {
  base: string;
  label: string;
  bar: string;
  color: ProgressColor;
  size: ProgressSizes;
}

export interface ProgressColor
  extends Pick<FlowbiteColors, 'dark' | 'blue' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple'> {
  [key: string]: string;
}

export interface ProgressSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface ProgressProps extends PropsWithChildren<ComponentProps<'div'>> {
  size?: keyof ProgressSizes;
  textLabel?: string;
  labelText?: boolean;
  textLabelPosition?: 'inside' | 'outside';
  progress: number;
  labelProgress?: boolean;
  progressLabelPosition?: 'inside' | 'outside';
}

export const Progress: FC<ProgressProps> = ({
  color = 'blue',
  textLabel = 'progressbar',
  labelText = false,
  textLabelPosition = 'inside',
  progress,
  labelProgress = false,
  progressLabelPosition = 'inside',
  size = 'md',
  className,
  ...props
}): JSX.Element => {
  const id = useId();
  const theme = useTheme().theme.progress;

  return (
    <>
      <div id={id} aria-label={textLabel} aria-valuenow={progress} role="progressbar" {...props}>
        {((textLabel && labelText && textLabelPosition === 'outside') ||
          (progress && labelProgress && progressLabelPosition === 'outside')) && (
          <div className={theme.label}>
            {textLabel && labelText && textLabelPosition === 'outside' && <span>{textLabel}</span>}
            {progress && labelProgress && progressLabelPosition === 'outside' && <span>{progress}%</span>}
          </div>
        )}
        <div className={classNames(theme.base, theme.size[size], className)}>
          <div
            className={classNames(theme.bar, theme.color[color], theme.size[size])}
            style={{ width: `${progress}%` }}
          >
            {textLabel && labelText && textLabelPosition === 'inside' && <span>{textLabel}</span>}
            {progress && labelProgress && progressLabelPosition === 'inside' && <span>{progress}</span>}
          </div>
        </div>
      </div>
    </>
  );
};
