import type { Metadata, NextPage } from 'next';
import TablePageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the table component to show text, images, links, and other elements inside a structured set of data made up of rows and columns of table cells',
  title: 'React Tables - Flowbite',
};

const TablePage: NextPage = () => {
  return <TablePageContent />;
};

export default TablePage;
