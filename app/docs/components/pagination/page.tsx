import type { Metadata, NextPage } from 'next';
import FormsPageContent from '.';

export const metadata: Metadata = {
  description: 'Use the Tailwind CSS pagination element to indicate a series of content across various pages',
  title: 'React Pagination - Flowbite',
};

const PaginationPage: NextPage = () => {
  return <FormsPageContent />;
};

export default PaginationPage;
