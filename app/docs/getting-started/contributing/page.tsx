import type { Metadata, NextPage } from 'next';
import ContributingPageContent from '.';

export const metadata: Metadata = {
  description: 'Learn how you can start contributing to the open-source Flowbite React UI component library',
  title: 'How to Contribute - Flowbite React',
};

const ContributingPage: NextPage = () => {
  return <ContributingPageContent />;
};

export default ContributingPage;
