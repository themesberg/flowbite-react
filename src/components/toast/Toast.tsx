import { PropsWithChildren, FC, useState } from 'react';
import classNames from 'classnames';
import { Duration } from './ToastContext';
import { ToastToggle } from './ToastToggle';
import { ToastContext } from './ToastContext';

export type ToastComponentProps = PropsWithChildren<{
  className?: string;
  duration?: Duration;
}>;

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
  const [isClosed, setIsClosed] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  return (
    <ToastContext.Provider value={{ duration, isClosed, isRemoved, setIsClosed, setIsRemoved }}>
      <div
        className={classNames(durationClasses[duration], { 'opacity-0': isClosed }, { hidden: isRemoved }, className)}
      >
        {children}
      </div>
    </ToastContext.Provider>
  );
};

ToastComponent.displayName = 'Toast';
ToastToggle.displayName = 'Toast.Toggle';

export const Toast = Object.assign(ToastComponent, {
  Toggle: ToastToggle,
});
