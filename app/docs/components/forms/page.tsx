import type { Metadata, NextPage } from 'next';
import FormsPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the Tailwind CSS form and input elements such as checkboxes, radios, textarea, text inputs to collect information from users with Flowbite',
  title: 'React Forms - Flowbite',
};

const FormsPage: NextPage = () => {
  return <FormsPageContent />;
};

export default FormsPage;
