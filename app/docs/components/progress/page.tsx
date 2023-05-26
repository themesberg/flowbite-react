import type { Metadata, NextPage } from 'next';
import ProgressPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the progress bar component to show the completion rate of a data indicator or use it as a loader element',
  title: 'React Progress Bar - Flowbite',
};

const ProgressPage: NextPage = () => {
  return <ProgressPageContent />;
};

export default ProgressPage;
