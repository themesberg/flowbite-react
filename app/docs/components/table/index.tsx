'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import TableDocs from './table.mdx';

const TablePage: FC = () => (
  <DocsContentLayout
    title="React Tables - Flowbite"
    description="Get started with the table component to show data such as text, numbers, images, and links using a structured set of data based on rows and columns based on React"
  >
    <TableDocs />
  </DocsContentLayout>
);

export default TablePage;
