import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import ButtonGroupPageContent from '.';

export const metadata: Metadata = {
  description:
    'Button groups allow you to stack together multiple buttons in a single line horziontally based on multiple styles and sizes using React and Tailwind CSS',
  title: 'React Button Group - Flowbite',
};

const ButtonGroupPage: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <ButtonGroupPageContent />
    </DocsContentLayout>
  );
};

export default ButtonGroupPage;
