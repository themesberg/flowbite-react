'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import ContributingDocs from './contributing.mdx';

const ContributingPage: FC = () => (
  <DocsContentLayout
    title="How to Contribute - Flowbite React"
    description="Learn how you can start contributing to the open-source Flowbite React UI component library"
  >
    <ContributingDocs />
  </DocsContentLayout>
);

export default ContributingPage;
