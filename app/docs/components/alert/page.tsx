import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import AlertPageContent from '.';

export const metadata: Metadata = {
  description: 'Show contextual information to your users using alert elements based on Tailwind CSS',
  title: 'React Alert - Flowbite',
};

const AlertPage: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <AlertPageContent />
    </DocsContentLayout>
  );
};

export default AlertPage;
