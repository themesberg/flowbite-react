'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '../../../components/docs-content-layout';
import CarouselDocs from './carousel.mdx';

const CarouselPage: FC = () => (
  <DocsContentLayout title="React Carousel - Flowbite" description="description placeholder">
    <CarouselDocs />
  </DocsContentLayout>
);

export default CarouselPage;
