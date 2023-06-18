'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import ListGroupDocs from './list-group.mdx';

const ListGroupPage: FC = () => (
  <DocsContentLayout
    title="React List Group - Flowbite"
    description="Get started with the list group component to show a list of elements and menu items inside of an unordered list item built with React and Tailwind CSS"
  >
    <ListGroupDocs />
  </DocsContentLayout>
);

export default ListGroupPage;
