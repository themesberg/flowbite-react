import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import AlertPageContent from '.';

export const metadata: Metadata = {
  description:
    'Get started with the alert component to show contextual information to the user such as when validating forms or showing errors based on React and Tailwind CSS',
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
