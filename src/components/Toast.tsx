import { FC, useState } from 'react';
import classNames from 'classnames';
import { HiX } from 'react-icons/hi';

type Duration = 75 | 100 | 150 | 200 | 300 | 500 | 1000;

export type ToastComponentProps = {
  className?: string;
  duration?: Duration;
};

const durationClasses: Record<Duration, string> = {
  75: 'duration-75',
  100: 'duration-100',
  150: 'duration-150',
  200: 'duration-200',
  300: 'duration-300',
  500: 'duration-500',
  1000: 'duration-1000',
};

const ToastComponent: FC<ToastComponentProps> = ({ children, className, duration = 300 }) => {
  const [close, setClose] = useState(false);
  const [remove, setRemove] = useState(false);

  const handleClick = () => {
    setClose(!close);
    setTimeout(() => setRemove(!remove), duration);
  };

  return (
    <div
      className={classNames(
        'flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400',
        durationClasses[duration],
        { 'opacity-0': close },
        { hidden: remove },
        className,
      )}
    >
      {children}
      <button
        type="button"
        className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={handleClick}
      >
        <span className="sr-only">Close</span>
        <HiX className="h-5 w-5" />
      </button>
    </div>
  );
};

ToastComponent.displayName = 'Toast';

export const Toast = Object.assign(ToastComponent, {});
