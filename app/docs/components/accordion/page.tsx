'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import AccordionDocs from './accordion.mdx';

const AccordionPage: FC = () => (
  <DocsContentLayout
    title="React Accordion - Flowbite"
    description="Use the accordion component to show hidden information based on the collapse and expand state of the child elements using data attribute options"
  >
    <AccordionDocs />
  </DocsContentLayout>
);

export default AccordionPage;
