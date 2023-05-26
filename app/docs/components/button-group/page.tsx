import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import ButtonGroupPageContent from '.';

export const metadata: Metadata = {
  description: 'Button groups are a Tailwind CSS powered set of buttons sticked together in a horizontal line',
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
