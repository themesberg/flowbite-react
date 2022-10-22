import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';
import { useModalContext } from './ModalContext';

export type ModalFooterProps = PropsWithChildren<ComponentProps<'div'>>;

export const ModalFooter: FC<ModalFooterProps> = ({ children, className, ...props }) => {
  const { popup } = useModalContext();
  const theme = useTheme().theme.modal.footer;

  return (
    <div
      className={classNames(
        theme.base,
        {
          [theme.popup]: !popup,
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
