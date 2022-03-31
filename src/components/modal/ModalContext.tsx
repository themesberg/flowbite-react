import { createContext, useContext } from 'react';

type ModalContext = {
  popup?: boolean;
  onClose?: () => void;
};

export const ModalContext = createContext<ModalContext | undefined>(undefined);

export function useModalContext(): ModalContext {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModalContext should be used within the ModalContext provider!');
  }

  return context;
}
