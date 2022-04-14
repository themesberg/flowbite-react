import { ComponentProps, FC } from 'react';
import { useToastContext } from './ToastContext';
import { HiX } from 'react-icons/hi';

type ToastToggleProps = ComponentProps<'button'> & {
  xIcon?: FC<ComponentProps<'svg'>>;
};

export const ToastToggle: FC<ToastToggleProps> = ({ xIcon: XIcon = HiX }) => {
  const { duration, isClosed, isRemoved, setIsClosed, setIsRemoved } = useToastContext();

  const handleClick = () => {
    setIsClosed(!isClosed);
    setTimeout(() => setIsRemoved(!isRemoved), duration);
  };

  return (
    <button
      data-testid="toast-toggle-element"
      type="button"
      className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
      onClick={handleClick}
    >
      <span className="sr-only">Close</span>
      <XIcon className="h-5 w-5 shrink-0" />
    </button>
  );
};
