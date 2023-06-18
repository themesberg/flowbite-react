'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import ProgressDocs from './progress.mdx';

const ProgressPage: FC = () => (
  <DocsContentLayout
    title="React Progress Bar - Flowbite"
    description="The progress bar component is used to show the completion rate of a given task in the form of a filled bar where you can also add a label indicating percentage"
  >
    <ProgressDocs />
  </DocsContentLayout>
);

export default ProgressPage;
