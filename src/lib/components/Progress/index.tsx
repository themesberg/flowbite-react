import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useId } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import type { FlowbiteColors, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';

export interface ProgressProps extends PropsWithChildren<ComponentProps<'div'>> {
  size?: keyof ProgressSizes;
  label?: string;
  labelPosition?: 'inside' | 'outside' | 'none';
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
  label = 'progressbar',
  labelPosition = 'none',
  labelProgress = false,
  progress,
  size = 'md',
  ...props
}): JSX.Element => {
  const id = useId();
  const theme = useTheme().theme.progress;
  const theirProps = excludeClassName(props);

  return (
    <>
      <div id={id} aria-label={label} aria-valuenow={progress} role="progressbar" {...theirProps}>
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
