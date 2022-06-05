import type { ComponentProps, FC } from 'react';
import { useToastContext } from './ToastContext';
import { HiX } from 'react-icons/hi';
import { useTheme } from '../Flowbite/ThemeContext';

type ToastToggleProps = ComponentProps<'button'> & {
  xIcon?: FC<ComponentProps<'svg'>>;
};

export const ToastToggle: FC<ToastToggleProps> = ({ xIcon: XIcon = HiX }) => {
  const { duration, isClosed, isRemoved, setIsClosed, setIsRemoved } = useToastContext();
  const theme = useTheme().theme.toast.toggle;

  const handleClick = () => {
    setIsClosed(!isClosed);
    setTimeout(() => setIsRemoved(!isRemoved), duration);
  };

  return (
    <button
      data-testid="toast-toggle-element"
      type="button"
      className={theme.base}
      onClick={handleClick}
      aria-label="close"
    >
      <XIcon className={theme.icon} />
    </button>
  );
};
