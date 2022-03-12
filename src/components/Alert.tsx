import { ComponentProps, FC, ReactNode } from 'react';
import classNames from 'classnames';
import { HiX } from 'react-icons/hi';

export type AlertProps = {
  color?: 'blue' | 'red' | 'green' | 'yellow' | 'gray';
  Icon?: FC<ComponentProps<'svg'>>;
  rounded?: boolean;
  withBorderAccent?: boolean;
  additionalContent?: ReactNode;
  onDismiss?: () => void;
};

const colorClasses: Record<AlertProps['color'] & string, string> = {
  blue: 'text-blue-700 bg-blue-100 border-blue-500 dark:bg-blue-200 dark:text-blue-800',
  red: 'text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800',
  green: 'text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800',
  yellow: 'text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800',
  gray: 'text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300',
};

export const Alert: FC<AlertProps> = ({
  children,
  color = 'blue',
  Icon,
  rounded = true,
  withBorderAccent,
  additionalContent,
  onDismiss,
}) => {
  return (
    <div
      className={classNames('flex flex-col p-4 gap-2 text-sm', colorClasses[color], {
        'rounded-lg': rounded,
        'border-t-4': withBorderAccent,
      })}
      role="alert"
    >
      <div className="flex items-center">
        {Icon && <Icon className="inline flex-shrink-0 mr-3 h-5 w-5" />}
        <div>{children}</div>
        {onDismiss && (
          <button
            type="button"
            className={classNames('ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8', {
              'bg-blue-100 text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300':
                color === 'blue',
              'bg-red-100 text-red-500 focus:ring-red-400 hover:bg-red-200 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300':
                color === 'red',
              'bg-green-100 text-green-500 focus:ring-green-400 hover:bg-green-200 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300':
                color === 'green',
              'bg-yellow-100 text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300':
                color === 'yellow',
              'bg-gray-100 text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white':
                color === 'gray',
            })}
            aria-label="Close"
            onClick={onDismiss}
          >
            <span className="sr-only">Close</span>
            <HiX className="w-5 h-5" />
          </button>
        )}
      </div>
      {additionalContent && <div>{additionalContent}</div>}
    </div>
  );
};
