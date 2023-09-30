import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import TextareaPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the textarea component as a multi-line text field input and use it inside form elements available in multiple sizes, styles, and variants',
  title: 'React Textarea - Flowbite',
};

const FileInputPage: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <TextareaPageContent />
    </DocsContentLayout>
  );
};

export default FileInputPage;
