import type { Metadata, NextPage } from 'next';
import FormsPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the forms elements from Flowbite React to start receiving user input data based on input elements, checkboxes, radio buttons, file uploads based on multiple sizes, colors, and styles',
  title: 'React Forms - Flowbite',
};

const FormsPage: NextPage = () => {
  return <FormsPageContent />;
};

export default FormsPage;
