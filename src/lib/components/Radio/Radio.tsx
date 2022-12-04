import classNames from 'classnames';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteRadioTheme {
  base: string;
}

export type RadioProps = Omit<ComponentProps<'input'>, 'type' | 'ref'>;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({ className, ...props }, ref) => {
  const theme = useTheme().theme.radio;
  return <input ref={ref} className={classNames(theme.base, className)} type="radio" {...props} />;
});

Radio.displayName = 'Radio';
