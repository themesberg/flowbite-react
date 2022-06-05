import type { ComponentProps, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { useModalContext } from './ModalContext';
import { useTheme } from '../Flowbite/ThemeContext';
import { excludeClassName } from '../../helpers/exclude';

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
