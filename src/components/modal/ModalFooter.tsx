import { FC } from 'react';
import classNames from 'classnames';

import { useModalContext } from './ModalContext';

export type ModalFooterProps = {
  className?: string;
};

export const ModalFooter: FC<ModalFooterProps> = ({ children, className }) => {
  const { popup } = useModalContext();

  return (
    <div
      className={classNames(
        'flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600',
        {
          'border-t': !popup,
        },
        className,
      )}
    >
      {children}
    </div>
  );
};
