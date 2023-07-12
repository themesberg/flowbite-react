import type { Metadata, NextPage } from 'next';
import IntroductionPageContent from '.';

export const metadata: Metadata = {
  description:
    'Learn more about the free and open-source Flowbite React UI components and start building modern web applications using React components based on Tailwind CSS',
  title: 'Flowbite React - UI Component Library',
};

const IntroductionPage: NextPage = () => {
  return <IntroductionPageContent />;
};

export default IntroductionPage;
