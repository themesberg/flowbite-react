'use client';

import type { FC } from 'react';
import { HiHome } from 'react-icons/hi';
import { CodePreview } from '~/app/components/code-preview';
import { Breadcrumb } from '~/src';
import { DocsContentLayout } from '../../../components/docs-content-layout';

const BreadcrumbPage: FC = () => (
  <DocsContentLayout title="React Breadcrumb - Flowbite" description="description placeholder">
    <CodePreview title="Default breadcrumb">
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="#" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
        <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
      </Breadcrumb>
    </CodePreview>
    <CodePreview title="Solid background">
      <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-900">
        <Breadcrumb.Item href="#" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
        <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
      </Breadcrumb>
    </CodePreview>
  </DocsContentLayout>
);

export default BreadcrumbPage;
