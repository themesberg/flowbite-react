'use client';

import type { FC } from 'react';

import { DocsContentLayout } from '~/app/components/docs-content-layout';
import CardDocs from './card.mdx';

const CardPage: FC = () => (
  <DocsContentLayout
    title="React Cards - Flowbite"
    description="Get started with a large variety of Tailwind CSS card examples for your web project"
  >
    <CardDocs />
  </DocsContentLayout>
);

export default CardPage;
