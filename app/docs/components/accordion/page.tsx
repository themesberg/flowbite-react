import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import AccordionPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the accordion component to show hidden information based on the collapse and expand state of the child elements using data attribute options',
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
