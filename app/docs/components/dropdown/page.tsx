'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '../../../components/docs-content-layout';
import DropdownDocs from './dropdown.mdx';

const DropdownPage: FC = () => (
  <DocsContentLayout title="React Dropdown - Flowbite" description="description placeholder">
    <DropdownDocs />
  </DocsContentLayout>
);

export default DropdownPage;
