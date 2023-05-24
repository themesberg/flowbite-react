'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import DropdownDocs from './dropdown.mdx';

const DropdownPage: FC = () => (
  <DocsContentLayout
    title="React Dropdown - Flowbite"
    description="Get started with the dropdown component to show a list of menu items when clicking on the trigger element based on multiple layouts, styles, and placements"
  >
    <DropdownDocs />
  </DocsContentLayout>
);

export default DropdownPage;
