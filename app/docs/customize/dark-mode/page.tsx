import type { Metadata, NextPage } from 'next';
import DarkModePageContent from '.';

export const metadata: Metadata = {
  description:
    'Learn how to configure and build a dark mode switcher for Flowbite using Tailwind CSS and start developing with the components from the library',
  title: 'React Dark Mode - Flowbite',
};

const DarkModePage: NextPage = () => {
  return <DarkModePageContent />;
};

export default DarkModePage;
