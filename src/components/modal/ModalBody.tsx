import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { useModalContext } from './ModalContext';

export type ModalBodyProps = PropsWithChildren<{
  className?: string;
}>;

export const ModalBody: FC<ModalBodyProps> = ({ children, className }) => {
  const { popup } = useModalContext();

  return (
    <div
      className={classNames(
        'p-6',
        {
          'pt-0': popup,
        },
        className,
      )}
    >
      {children}
    </div>
  );
};
