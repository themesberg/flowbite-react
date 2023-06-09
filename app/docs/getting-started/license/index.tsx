'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import LicensePageContent from './license.mdx';

const LicensePage: FC = () => (
  <DocsContentLayout
    title="License - Flowbite React"
    description="Learn more about the open-source licensing rights of the Flowbite React UI component library"
  >
    <LicensePageContent />
  </DocsContentLayout>
);

export default LicensePage;
