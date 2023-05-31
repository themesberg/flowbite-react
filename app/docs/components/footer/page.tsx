import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import CarouselPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the footer component at the end of your page to show content such as sitemap links, brand logo, social icons and more using React and Tailwind CSS',
  title: 'React Footer - Flowbite',
};

const FooterPage: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <CarouselPageContent />
    </DocsContentLayout>
  );
};

export default FooterPage;
