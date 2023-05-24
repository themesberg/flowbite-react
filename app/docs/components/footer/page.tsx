'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import FooterDocs from './footer.mdx';

const FooterPage: FC = () => (
  <DocsContentLayout
    title="React Footer - Flowbite"
    description="Use the footer section at the bottom of every page to show valuable information to your users, such as sitemap links, a copyright notice, and a logo"
  >
    <FooterDocs />
  </DocsContentLayout>
);

export default FooterPage;
