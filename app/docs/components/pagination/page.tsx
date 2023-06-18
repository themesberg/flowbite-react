import type { Metadata, NextPage } from 'next';
import FormsPageContent from '.';

export const metadata: Metadata = {
  description:
    'Get started with the pagination component to indicate the number of pages with number, link, and control buttons and allow the user to navigate through these pages',
  title: 'React Pagination - Flowbite',
};

const PaginationPage: NextPage = () => {
  return <FormsPageContent />;
};

export default PaginationPage;
