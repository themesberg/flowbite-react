import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import CarouselPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the footer section at the bottom of every page to show valuable information to your users, such as sitemap links, a copyright notice, and a logo',
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
