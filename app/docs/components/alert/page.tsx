'use client';

import type { FC } from 'react';

import { DocsContentLayout } from '../../../components/docs-content-layout';
import AlertDocs from './alert.mdx';

const AlertPage: FC = () => (
  <DocsContentLayout
    title="React Alert - Flowbite"
    description="Show contextual information to your users using alert elements based on Tailwind CSS"
  >
    <AlertDocs></AlertDocs>
  </DocsContentLayout>
);

export default AlertPage;
