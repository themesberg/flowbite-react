import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import BannerPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the banner component to show marketing messages and CTA buttons at the top or bottom side of your website based on the utility classes from Tailwind CSS',
  title: 'React Sticky Banner - Flowbite',
};

const BreadcrumbPage: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <BannerPageContent />
    </DocsContentLayout>
  );
};

export default BreadcrumbPage;
