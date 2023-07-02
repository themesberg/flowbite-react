'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import SidebarDocs from './sidebar.mdx';

const SidebarPage: FC = () => (
  <DocsContentLayout
    title="React Sidebar - Flowbite"
    description="Use the sidebar component to show a list of menu items including multi-level dropdown menu on the left or right side of your page for admin dashboards and applications"
  >
    <SidebarDocs />
  </DocsContentLayout>
);

export default SidebarPage;
