'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import CarouselDocs from './carousel.mdx';

const CarouselPage: FC = () => (
  <DocsContentLayout
    title="React Carousel - Flowbite"
    description="Use the carousel component to slide through multiple elements and images using custom controls, indicators, intervals, and options"
  >
    <CarouselDocs />
  </DocsContentLayout>
);

export default CarouselPage;
