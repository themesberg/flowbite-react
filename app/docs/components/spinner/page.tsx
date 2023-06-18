import type { Metadata, NextPage } from 'next';
import SpinnerPageContent from '.';

export const metadata: Metadata = {
  description:
    'Indicate a loading status when fetching data by using the spinner component built with React and animated with Tailwind CSS based on multiple colors and sizes',
  title: 'React Spinner (Loader) - Flowbite',
};

const SpinnerPage: NextPage = () => {
  return <SpinnerPageContent />;
};

export default SpinnerPage;
