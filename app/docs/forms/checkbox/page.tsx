import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import CheckboxPageContent from '.';

export const metadata: Metadata = {
  description:
    'Get started with the checkbox component to allow the user to select one or more options in the form of a square box available in multiple sizes and colors',
  title: 'React Checkbox - Flowbite',
};

const CheckboxPage: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <CheckboxPageContent />
    </DocsContentLayout>
  );
};

export default CheckboxPage;
