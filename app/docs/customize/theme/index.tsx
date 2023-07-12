'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import ThemePageContent from './theme.mdx';

const ThemePage: FC = () => (
  <DocsContentLayout
    description="Learn how you can change the Tailwind CSS classes used by the components in Flowbite React"
    title="React Theme - Flowbite"
  >
    <ThemePageContent />
  </DocsContentLayout>
);

export default ThemePage;
