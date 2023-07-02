'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import SpinnerDocs from './spinner.mdx';

const SpinnersPage: FC = () => (
  <DocsContentLayout
    title="React Spinner (Loader) - Flowbite"
    description="Indicate a loading status when fetching data by using the spinner component built with React and animated with Tailwind CSS based on multiple colors and sizes"
  >
    <SpinnerDocs />
  </DocsContentLayout>
);

export default SpinnersPage;
