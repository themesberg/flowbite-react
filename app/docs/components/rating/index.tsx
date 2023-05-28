'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import RatingDocs from './rating.mdx';

const RatingPage: FC = () => (
  <DocsContentLayout
    title="React Rating - Flowbite"
    description="Get started with the rating component from Flowbite React to show testimonials and user reviews of your products using stars, labels and advanced layouts"
  >
    <RatingDocs />
  </DocsContentLayout>
);

export default RatingPage;
