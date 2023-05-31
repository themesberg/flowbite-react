import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import CarouselPageContent from '.';

export const metadata: Metadata = {
  description:
    'Get started with the carousel component to showcase images and content and slide through them using custom controls, intervals, and indicators with React and Tailwind CSS',
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
