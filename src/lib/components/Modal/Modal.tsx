import { ModalBody } from './ModalBody';
import { ModalClose } from './ModalClose';
import { ModalContent } from './ModalContent';
import { ModalContextProvider, ModalContextProviderProps } from './ModalContext';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';
import { ModalTrigger } from './ModalTrigger';

export interface ModalProps extends ModalContextProviderProps {}

ModalContextProvider.displayName = 'Modal';
ModalTrigger.displayName = 'Modal.Trigger';
ModalClose.displayName = 'Modal.Close';
ModalContent.displayName = 'Modal.Content';
ModalHeader.displayName = 'Modal.Header';
ModalBody.displayName = 'Modal.Body';
ModalFooter.displayName = 'Modal.Footer';

export const Modal = Object.assign(ModalContextProvider, {
  Trigger: ModalTrigger,
  Close: ModalClose,
  Content: ModalContent,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
