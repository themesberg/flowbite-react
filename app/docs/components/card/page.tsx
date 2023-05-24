'use client';

import type { FC } from 'react';

import { DocsContentLayout } from '../../../components/docs-content-layout';
import CardDocs from './card.mdx';

const CardPage: FC = () => (
  <DocsContentLayout title="React Cards - Flowbite" description="description placeholder">
    <CardDocs />
  </DocsContentLayout>
);

export default CardPage;
