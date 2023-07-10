import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import CardPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the datepicker component to select a date from a calendar view based on an input element by selecting the day, month, and year values using React and Tailwind CSS',
  title: 'React Datepicker - Flowbite',
};

const CardPage: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <CardPageContent />
    </DocsContentLayout>
  );
};

export default CardPage;
