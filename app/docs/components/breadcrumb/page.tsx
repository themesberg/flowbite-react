'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '../../../components/docs-content-layout';
import BreadcrumbDocs from './breadcrumb.mdx';

const BreadcrumbPage: FC = () => (
  <DocsContentLayout title="React Breadcrumb - Flowbite" description="description placeholder">
    <BreadcrumbDocs />
  </DocsContentLayout>
);

export default BreadcrumbPage;
