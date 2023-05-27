import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import CardPageContent from '.';

export const metadata: Metadata = {
  description:
    'Get started with the card component to show content in a box such as titles, descriptions, and images based on multiple styles and sizes built with React',
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
