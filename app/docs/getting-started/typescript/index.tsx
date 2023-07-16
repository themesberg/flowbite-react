'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import TypeScriptPageContent from './typescript.mdx';

const TypeScriptPage: FC = () => (
  <DocsContentLayout
    title="React TypeScript Types - Flowbite"
    description="Learn more about the types and interfaces you can use and extend with Flowbite React by leveraging TypeScript"
  >
    <TypeScriptPageContent />
  </DocsContentLayout>
);

export default TypeScriptPage;
