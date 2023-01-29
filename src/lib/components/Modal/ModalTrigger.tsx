import type { FC, PropsWithChildren } from 'react';
import { useModalContext } from './ModalContext';
import { ProxyChild } from './ProxyChild';

export const ModalTrigger: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const { openModal } = useModalContext();

  return <ProxyChild onClick={openModal}>{children}</ProxyChild>;
};
