import { createContext, FC, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react';
type ModalContext = {
  popup: boolean;
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const ModalContext = createContext<ModalContext | undefined>(undefined);

export function useModalContext(): ModalContext {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModalContext() should be used within the <ModalContextProvider />!');
  }

  return context;
}

export type ModalContextProviderProps = PropsWithChildren<{
  popup?: boolean;
  show?: boolean;
  onClose?: () => void;
}>;

export const ModalContextProvider: FC<ModalContextProviderProps> = ({
  popup = false,
  show = false,
  onClose,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(show);

  const close = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <ModalContext.Provider value={useMemo(() => ({ isOpen, popup, close, open }), [isOpen, popup, close, open])}>
      {children}
    </ModalContext.Provider>
  );
};
