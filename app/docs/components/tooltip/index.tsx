'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import TooltipDocs from './tooltip.mdx';

const TooltipPage: FC = () => (
  <DocsContentLayout
    title="React Tooltip - Flowbite"
    description="Use the tooltip component to show a descriptive text when hovering over an element such as a button and customize the content and style with React and Tailwind CSS"
  >
    <TooltipDocs />
  </DocsContentLayout>
);

export default TooltipPage;
