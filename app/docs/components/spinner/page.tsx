import type { Metadata, NextPage } from 'next';
import SpinnerPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the spinner component as a loader indicator in your projects when fetching data based on an animated SVG',
  title: 'React Spinner (Loader) - Flowbite',
};

const SpinnerPage: NextPage = () => {
  return <SpinnerPageContent />;
};

export default SpinnerPage;
