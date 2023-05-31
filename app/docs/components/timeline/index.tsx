'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import TimelineDocs from './timeline.mdx';

const TimelinePage: FC = () => (
  <DocsContentLayout
    title="React Timeline - Flowbite"
    description="Use the timeline component from Flowbite React to display a list of items and events in a chronological order based on multiples styles, colors and layouts"
  >
    <TimelineDocs />
  </DocsContentLayout>
);

export default TimelinePage;
