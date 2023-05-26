import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import AccordionPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the accordion component and its options to expand and collapse the content inside each panel based on state reactivity from React and Tailwind CSS',
  title: 'React Accordion - Flowbite',
};

const AccordionPage: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <AccordionPageContent />
    </DocsContentLayout>
  );
};

export default AccordionPage;
