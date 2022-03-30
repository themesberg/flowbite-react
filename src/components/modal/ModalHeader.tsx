import { FC } from 'react';
import classNames from 'classnames';
import { HiOutlineX } from 'react-icons/hi';

import { useModalContext } from './ModalContext';

export const ModalHeader: FC = ({ children }) => {
  const { popup, onClose } = useModalContext();

  return (
    <div
      className={classNames('flex items-start justify-between rounded-t dark:border-gray-600', {
        'p-2': popup,
        'border-b p-5': !popup,
      })}
    >
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">{children}</h3>
      <button
        className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        type="button"
        onClick={onClose}
      >
        <HiOutlineX className="h-5 w-5" />
      </button>
    </div>
  );
};
