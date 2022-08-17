import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';

export type RadioProps = Omit<ComponentProps<'input'>, 'type' | 'className' | 'ref'>;

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const theme = useTheme().theme.formControls.radio;
  const theirProps = excludeClassName(props);
  return <input ref={ref} className={theme.base} type="radio" {...theirProps} />;
});

Radio.displayName = 'Radio';
