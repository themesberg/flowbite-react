import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';
import { useModalContext } from './ModalContext';

export type ModalBodyProps = PropsWithChildren<ComponentProps<'div'>>;

export const ModalBody: FC<ModalBodyProps> = ({ children, className, ...props }) => {
  const { popup } = useModalContext();
  const theme = useTheme().theme.modal.body;

  return (
    <div
      className={classNames(
        theme.base,
        {
          [theme.popup]: popup,
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
