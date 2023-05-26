import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import BreadcrumbPageContent from '.';

export const metadata: Metadata = {
  description: 'Show the location of the current page in a hierarchical structure using the breadcrumb components',
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
