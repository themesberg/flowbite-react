import type { Metadata, NextPage } from 'next';
import ListPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the list component to show an unordered or ordered list of items based on multiple styles, layouts, and variants built with Tailwind CSS and Flowbite',
  title: 'React Lists - Flowbite',
};

const ListPage: NextPage = () => {
  return <ListPageContent />;
};

export default ListPage;
