import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import ToggleSwitchPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the toggle component to switch between a binary state of true or false using a single click available in multiple sizes, variants, and colors',
  title: 'React Toggle - Flowbite',
};

const FileInputPage: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <ToggleSwitchPageContent />
    </DocsContentLayout>
  );
};

export default FileInputPage;
