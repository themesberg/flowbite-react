import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import DropdownPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the dropdown component to trigger a list of menu items when clicking on an element such as a button or link based on multiple styles, sizes, and placements with React',
  title: 'React Dropdown - Flowbite',
};

const DropdownPage: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <DropdownPageContent />
    </DocsContentLayout>
  );
};

export default DropdownPage;
