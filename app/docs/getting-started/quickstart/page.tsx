import type { Metadata, NextPage } from 'next';
import QuickstartPageContent from '.';

export const metadata: Metadata = {
  description:
    'Learn how to get started with the free and open-source Flowbite React UI component library based on the utility classes from Tailwind CSS',
  title: 'Quickstart - Flowbite React',
};

const QuickstartPage: NextPage = () => {
  return <QuickstartPageContent />;
};

export default QuickstartPage;
