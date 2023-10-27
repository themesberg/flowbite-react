'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import ListDocs from './list.mdx';

const ListPage: FC = () => (
  <DocsContentLayout
    title="React List - Flowbite"
    description="Use the list component to show an unordered or ordered list of items based on multiple styles, layouts, and variants built with Tailwind CSS and Flowbite"
  >
    <ListDocs />
  </DocsContentLayout>
);

export default ListPage;
