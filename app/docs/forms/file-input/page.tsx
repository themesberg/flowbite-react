import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import FileInputPageContent from '.';

export const metadata: Metadata = {
  description:
    'Get started with the file input component to let the user to upload one or more files from their device storage based on multiple styles and sizes',
  title: 'React File Input - Flowbite',
};

const FileInputPage: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <FileInputPageContent />
    </DocsContentLayout>
  );
};

export default FileInputPage;
