'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import NextjsPageContent from './nextjs.mdx';

const NextjsPage: FC = () => (
  <DocsContentLayout
    title="Use with Next.js - Flowbite React"
    description="Copy the starter or follow the steps below to get started with Flowbite React in Next.js"
  >
    <NextjsPageContent />
  </DocsContentLayout>
);

export default NextjsPage;
