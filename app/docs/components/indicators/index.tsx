'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import IndicatorDocs from './indicator.mdx';

const FormsPageContent: FC = () => {
  return (
    <DocsContentLayout
      title="React Indicators - Flowbite"
      description="Use the indicator component to show a number count, account status, or as a loading label positioned relative to the parent component coded with Tailwind CSS"
    >
      <IndicatorDocs />
    </DocsContentLayout>
  );
};

export default FormsPageContent;
