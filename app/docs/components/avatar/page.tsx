'use client';

import type { FC } from 'react';

import { DocsContentLayout } from '../../../components/docs-content-layout';
import AvatarDocs from './avatar.mdx';

const AvatarPage: FC = () => (
  <DocsContentLayout
    title="React Avatar - Flowbite"
    description="Use the avatar component to show a visual representation of a user profile using an image element or SVG object based on multiple styles and sizes"
  >
    <AvatarDocs />
  </DocsContentLayout>
);

export default AvatarPage;
