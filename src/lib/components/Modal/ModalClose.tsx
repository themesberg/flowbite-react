import type { FC, PropsWithChildren } from 'react';
import { useModalContext } from './ModalContext';
import { ProxyChild } from './ProxyChild';

export const ModalClose: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const { closeModal } = useModalContext();

  return <ProxyChild onClick={closeModal}>{children}</ProxyChild>;
};
