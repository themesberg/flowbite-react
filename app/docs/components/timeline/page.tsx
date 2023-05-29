import type { Metadata, NextPage } from 'next';
import TimelinePageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the timeline component from Flowbite React to display a list of items and events in a chronological order based on multiples styles, colors and layouts',
  title: 'React Timeline - Flowbite',
};

const TimelinePage: NextPage = () => {
  return <TimelinePageContent />;
};

export default TimelinePage;
