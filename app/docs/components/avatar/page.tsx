'use client';

import type { FC } from 'react';

import { DocsContentLayout } from '../../../components/docs-content-layout';
import AvatarDocs from './avatar.mdx';

const AvatarPage: FC = () => (
  <DocsContentLayout title="React Avatar - Flowbite" description="description placeholder">
    <AvatarDocs />
  </DocsContentLayout>
);

export default AvatarPage;
