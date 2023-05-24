'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import BadgeDocs from './badge.mdx';

const BadgePage: FC = () => (
  <DocsContentLayout
    title="React Badge - Flowbite"
    description="Use Tailwind CSS badges as elements to show counts or labels separately or inside other components"
  >
    <BadgeDocs />
  </DocsContentLayout>
);

export default BadgePage;
