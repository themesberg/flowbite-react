import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import CarouselPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the carousel component to slide through multiple elements and images using custom controls, indicators, intervals, and options',
  title: 'React Carousel - Flowbite',
};

const CarouselPage: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <CarouselPageContent />
    </DocsContentLayout>
  );
};

export default CarouselPage;
