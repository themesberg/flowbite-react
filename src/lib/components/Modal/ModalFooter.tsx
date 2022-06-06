import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { useModalContext } from './ModalContext';

export type ModalFooterProps = PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>>;

export const ModalFooter: FC<ModalFooterProps> = ({ children, ...props }) => {
  const { popup } = useModalContext();
  const theme = useTheme().theme.modal.footer;
  const theirProps = excludeClassName(props);

  return (
    <div
      className={classNames(theme.base, {
        [theme.popup]: !popup,
      })}
      {...theirProps}
    >
      {children}
    </div>
  );
};
