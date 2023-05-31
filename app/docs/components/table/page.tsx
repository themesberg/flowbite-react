import type { Metadata, NextPage } from 'next';
import TablePageContent from '.';

export const metadata: Metadata = {
  description:
    'Get started with the table component to show data such as text, numbers, images, and links using a structured set of data based on rows and columns based on React',
  title: 'React Tables - Flowbite',
};

const TablePage: NextPage = () => {
  return <TablePageContent />;
};

export default TablePage;
