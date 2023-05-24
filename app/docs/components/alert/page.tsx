'use client';

import type { FC } from 'react';

import { DocsContentLayout } from '../../../components/docs-content-layout';
import AlertDocs from './alert.mdx';

const AlertPage: FC = () => (
  <DocsContentLayout title="React Alert - Flowbite" description="description placeholder">
    <AlertDocs></AlertDocs>
  </DocsContentLayout>
);

export default AlertPage;
