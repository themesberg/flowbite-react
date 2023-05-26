import type { Metadata, NextPage } from 'next';
import TimelinePageContent from '.';

export const metadata: Metadata = {
  description:
    'Get started with the responsive timeline component to show data in a chronological order with support for multiple styles, sizes, and variants"',
  title: 'React Timeline - Flowbite',
};

const TimelinePage: NextPage = () => {
  return <TimelinePageContent />;
};

export default TimelinePage;
