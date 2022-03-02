import { FC } from 'react';
import classNames from 'classnames';

export type CardProps = {
  className?: string;
};

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        'flex flex-col gap-4 w-full p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700',
        className,
      )}
    >
      {children}
    </div>
  );
};
