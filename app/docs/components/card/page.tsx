import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import CardPageContent from '.';

export const metadata: Metadata = {
  description: 'Get started with a large variety of Tailwind CSS card examples for your web project',
  title: 'React Cards - Flowbite',
};

const CardPage: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <CardPageContent />
    </DocsContentLayout>
  );
};

export default CardPage;
