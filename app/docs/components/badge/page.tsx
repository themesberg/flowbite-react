'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '../../../components/docs-content-layout';
import BadgeDocs from './badge.mdx';

const BadgePage: FC = () => (
  <DocsContentLayout title="React Badge - Flowbite" description="description placeholder">
    <BadgeDocs />
  </DocsContentLayout>
);

export default BadgePage;
