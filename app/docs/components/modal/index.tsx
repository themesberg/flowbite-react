'use client';

import type { FC } from 'react';
import { useRef, useState } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import ModalDocs from './modal.mdx';

const ModalPage: FC = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [email, setEmail] = useState('');
  const [modalSize, setModalSize] = useState<string>('md');
  const [modalPlacement, setModalPlacement] = useState<string>('center');
  const emailInputRef = useRef<HTMLInputElement>(null);

  console.log(modalSize, modalPlacement);

  const state = {
    openModal,
    setOpenModal,
    modalSize,
    setModalSize,
    modalPlacement,
    setModalPlacement,
    email,
    setEmail,
    emailInputRef,
  };

  return (
    <DocsContentLayout
      title="React Modal - Flowbite"
      description="Use the modal component to show an interactive dialog to your website users that overlays the main content based on multiple sizes, layouts, and styles"
    >
      <ModalDocs {...state} />
    </DocsContentLayout>
  );
};

export default ModalPage;
