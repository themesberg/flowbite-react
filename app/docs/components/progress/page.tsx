import type { Metadata, NextPage } from 'next';
import ProgressPageContent from '.';

export const metadata: Metadata = {
  description:
    'The progress bar component is used to show the completion rate of a given task in the form of a filled bar where you can also add a label indicating percentage',
  title: 'React Progress Bar - Flowbite',
};

const ProgressPage: NextPage = () => {
  return <ProgressPageContent />;
};

export default ProgressPage;
