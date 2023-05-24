'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '../../../components/docs-content-layout';
import ButtonDocs from './button.mdx';

const ButtonPage: FC = () => (
  <DocsContentLayout
    title="React Buttons - Flowbite"
    description="Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows"
  >
    <ButtonDocs />
  </DocsContentLayout>
);

export default ButtonPage;
