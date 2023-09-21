'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import FormDocs from './forms.mdx';

const FormsPageContent: FC = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);
  const [switch3, setSwitch3] = useState(true);

  const state = {
    switch1,
    setSwitch1,
    switch2,
    setSwitch2,
    switch3,
    setSwitch3,
  };

  return (
    <DocsContentLayout
      title="React Forms - Flowbite"
      description="Use the forms elements from Flowbite React to start receiving user input data based on input elements, checkboxes, radio buttons, file uploads based on multiple sizes, colors, and styles"
    >
      <FormDocs {...state} />
    </DocsContentLayout>
  );
};

export default FormsPageContent;
