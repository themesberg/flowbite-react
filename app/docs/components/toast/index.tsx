'use client';

import { useState, type FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import ToastDocs from './toast.mdx';

const ToastPage: FC = () => {
  const [showToast, setShowToast] = useState(false);

  const state = {
    showToast,
    setShowToast,
  };

  return (
    <DocsContentLayout
      title="React Toast - Flowbite"
      description="Push notifications to your website visitors using the toast component and choose from multiple sizes, colors, styles, position and icons based on React and Tailwind CSS"
    >
      <ToastDocs {...state} />
    </DocsContentLayout>
  );
};

export default ToastPage;
