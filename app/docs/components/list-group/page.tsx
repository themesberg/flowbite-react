import type { Metadata, NextPage } from 'next';
import ListGroupPageContent from '.';

export const metadata: Metadata = {
  description: 'Use the list group component to display a series of items, buttons or links inside a single element',
  title: 'React List Group - Flowbite',
};

const ListGroupPage: NextPage = () => {
  return <ListGroupPageContent />;
};

export default ListGroupPage;
