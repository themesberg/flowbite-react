'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import QuickstartPageContent from './quickstart.mdx';

const QuickstartPage: FC = () => (
  <DocsContentLayout
    title="Quickstart - Flowbite React"
    description="Learn how to get started with the free and open-source Flowbite React UI component library based on the utility
  classes from Tailwind CSS"
  >
    <QuickstartPageContent />
  </DocsContentLayout>
);

export default QuickstartPage;
