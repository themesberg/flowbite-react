import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { useTheme } from '../Flowbite/ThemeContext';
import { ModalClose } from './ModalClose';
import { useModalContext } from './ModalContext';

export type ModalHeaderProps = PropsWithChildren<ComponentProps<'div'>>;

export const ModalHeader: FC<ModalHeaderProps> = ({ children, className, ...props }): JSX.Element => {
  const { popup } = useModalContext();
  const theme = useTheme().theme.modal.header;

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
      <h3 className={theme.title}>{children}</h3>
      <ModalClose>
        <button aria-label="Close" className={theme.close.base} type="button">
          <HiOutlineX aria-hidden className={theme.close.icon} />
        </button>
      </ModalClose>
    </div>
  );
};
