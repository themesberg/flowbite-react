'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import TypeScriptPageContent from './typescript.mdx';

const TypeScriptPage: FC = () => (
  <DocsContentLayout
    title="React TypeScript Types - Flowbite"
    description="Learn how to get started with the free and open-source Flowbite React UI component library based on the utility classes from Tailwind CSS"
  >
    <TypeScriptPageContent />
  </DocsContentLayout>
);

export default TypeScriptPage;
