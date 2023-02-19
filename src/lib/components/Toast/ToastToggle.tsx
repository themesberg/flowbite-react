import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { HiX } from 'react-icons/hi';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';
import { useToastContext } from './ToastContext';

export interface FlowbiteToastToggleTheme {
  base: string;
  icon: string;
}

export interface ToastToggleProps extends ComponentProps<'button'> {
  theme?: DeepPartial<FlowbiteToastToggleTheme>;
  xIcon?: FC<ComponentProps<'svg'>>;
}

export const ToastToggle: FC<ToastToggleProps> = ({
  className,
  theme: customTheme = {},
  xIcon: XIcon = HiX,
  ...props
}) => {
  const { duration, isClosed, isRemoved, setIsClosed, setIsRemoved } = useToastContext();
  const theme = mergeDeep(useTheme().theme.toast.toggle, customTheme);

  const handleClick = () => {
    setIsClosed(!isClosed);
    setTimeout(() => setIsRemoved(!isRemoved), duration);
  };

  return (
    <button
      aria-label="Close"
      onClick={handleClick}
      type="button"
      className={classNames(theme.base, className)}
      {...props}
    >
      <XIcon className={theme.icon} />
    </button>
  );
};
