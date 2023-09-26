'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import BlockquoteDocs from './blockquote.mdx';

const FormsPageContent: FC = () => {
  return (
    <DocsContentLayout
      title="React Blockquote - Flowbite"
      description="The blockquote component can be used to quote text content from an external source that can be used for testimonials, reviews, and quotes inside an article"
    >
      <BlockquoteDocs />
    </DocsContentLayout>
  );
};

export default FormsPageContent;
