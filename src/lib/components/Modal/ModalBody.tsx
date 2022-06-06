import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { useModalContext } from './ModalContext';

export type ModalBodyProps = PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>>;

export const ModalBody: FC<ModalBodyProps> = ({ children, ...props }) => {
  const { popup } = useModalContext();
  const theme = useTheme().theme.modal.body;
  const theirProps = excludeClassName(props);

  return (
    <div
      className={classNames(theme.base, {
        [theme.popup]: popup,
      })}
      {...theirProps}
    >
      {children}
    </div>
  );
};
