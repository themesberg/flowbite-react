import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useModalContext } from './ModalContext';

export type ModalHeaderProps = PropsWithChildren<ComponentProps<'div'>>;

export const ModalClose: FC<ModalHeaderProps> = ({ children, ...props }): JSX.Element => {
  const { close } = useModalContext();

  return (
    <div {...props} onClick={close}>
      {children}
    </div>
  );
};
