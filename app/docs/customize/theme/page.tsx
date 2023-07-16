import type { Metadata, NextPage } from 'next';
import ThemePageContent from '.';

export const metadata: Metadata = {
  description: 'Learn how you can change the Tailwind CSS classes used by the components in Flowbite React',
  title: 'React Theme - Flowbite',
};

const ThemePage: NextPage = () => {
  return <ThemePageContent />;
};

export default ThemePage;
