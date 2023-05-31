'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import ModalDocs from './modal.mdx';

const ModalPage: FC = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [modalSize, setModalSize] = useState<string>('md');
  const [modalPlacement, setModalPlacement] = useState<string>('center');

  const state = {
    openModal,
    setOpenModal,
    modalSize,
    setModalSize,
    modalPlacement,
    setModalPlacement,
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
