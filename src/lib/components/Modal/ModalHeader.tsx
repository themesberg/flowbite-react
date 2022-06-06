import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { useModalContext } from './ModalContext';

export type ModalHeaderProps = PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>>;

export const ModalHeader: FC<ModalHeaderProps> = ({ children, ...props }): JSX.Element => {
  const { popup, onClose } = useModalContext();
  const theme = useTheme().theme.modal.header;
  const theirProps = excludeClassName(props);

  return (
    <div
      className={classNames(theme.base, {
        [theme.popup]: popup,
      })}
      {...theirProps}
    >
      <h3 className={theme.title}>{children}</h3>
      <button aria-label="Close" className={theme.close.base} type="button" onClick={onClose}>
        <HiOutlineX aria-hidden className={theme.close.icon} />
      </button>
    </div>
  );
};
