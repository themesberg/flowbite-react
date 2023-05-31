import type { Metadata, NextPage } from 'next';
import TooltipPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the tooltip component to show a descriptive text when hovering over an element such as a button and customize the content and style with React and Tailwind CSS',
  title: 'React Tooltip - Flowbite',
};

const TooltipPage: NextPage = () => {
  return <TooltipPageContent />;
};

export default TooltipPage;
