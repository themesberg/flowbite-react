import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import BreadcrumbPageContent from '.';

export const metadata: Metadata = {
  description:
    'Get started with the breadcrumb component to show the current page location based on the URL structure using React and Tailwind CSS',
  title: 'React Breadcrumb - Flowbite',
};

const BreadcrumbPage: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <BreadcrumbPageContent />
    </DocsContentLayout>
  );
};

export default BreadcrumbPage;
