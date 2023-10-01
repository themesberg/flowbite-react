import type { Metadata, NextPage } from 'next';
import IndicatorPageCotent from '.';

export const metadata: Metadata = {
  description:
    'Use the indicator component to show a number count, account status, or as a loading label positioned relative to the parent component coded with Tailwind CSS',
  title: 'React Indicators - Flowbite',
};

const IndicatorPage: NextPage = () => {
  return <IndicatorPageCotent />;
};

export default IndicatorPage;
