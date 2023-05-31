import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import ButtonPageContent from '.';

export const metadata: Metadata = {
  description:
    'Enable user interaction with the button component to perform actions on your website as links, for payment, form submission, social buttons and more based on React and Tailwind CSS',
  title: 'React Buttons - Flowbite',
};

const ButtonPage: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <ButtonPageContent />
    </DocsContentLayout>
  );
};

export default ButtonPage;
