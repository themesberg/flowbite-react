'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '../../../components/docs-content-layout';
import AccordionDocs from './accordion.mdx';

const AccordionPage: FC = () => (
  <DocsContentLayout title="React Accordion - Flowbite" description="description placeholder">
    <AccordionDocs />
  </DocsContentLayout>
);

export default AccordionPage;
