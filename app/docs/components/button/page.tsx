'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '../../../components/docs-content-layout';
import ButtonDocs from './button.mdx';

const ButtonPage: FC = () => (
  <DocsContentLayout title="React Buttons - Flowbite" description="description placeholder">
    <ButtonDocs />
  </DocsContentLayout>
);

export default ButtonPage;
