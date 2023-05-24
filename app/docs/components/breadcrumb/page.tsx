'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '../../../components/docs-content-layout';
import BreadcrumbDocs from './breadcrumb.mdx';

const BreadcrumbPage: FC = () => (
  <DocsContentLayout
    title="React Breadcrumb - Flowbite"
    description="Show the location of the current page in a hierarchical structure using the breadcrumb components"
  >
    <BreadcrumbDocs />
  </DocsContentLayout>
);

export default BreadcrumbPage;
