'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '../../../components/docs-content-layout';
import FooterDocs from './footer.mdx';

const FooterPage: FC = () => (
  <DocsContentLayout title="React Footer - Flowbite" description="description placeholder">
    <FooterDocs />
  </DocsContentLayout>
);

export default FooterPage;
