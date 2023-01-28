import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useModalContext } from './ModalContext';

export type ModalHeaderProps = PropsWithChildren<ComponentProps<'div'>>;

export const ModalTrigger: FC<ModalHeaderProps> = ({ children, ...props }): JSX.Element => {
  const { open } = useModalContext();

  return (
    <div {...props} onClick={open}>
      {children}
    </div>
  );
};
