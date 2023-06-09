'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import DarkModeDocs from './dark-mode.mdx';

const DarkModePage: FC = () => (
  <DocsContentLayout
    description="Learn how to configure and build a dark mode switcher for Flowbite using Tailwind CSS and start developing with the components from the library"
    title="React Dark Mode - Flowbite"
  >
    <DarkModeDocs />
  </DocsContentLayout>
);

export default DarkModePage;
