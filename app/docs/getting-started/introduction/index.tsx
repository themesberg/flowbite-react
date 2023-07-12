'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import IntroductionPageContent from './introduction.mdx';

const IntroductionPage: FC = () => (
  <DocsContentLayout
    title="Flowbite React - UI Component Library"
    description="Learn more about the free and open-source Flowbite React UI components and start building modern web applications
  using React components based on Tailwind CSS"
  >
    <IntroductionPageContent />
  </DocsContentLayout>
);

export default IntroductionPage;
