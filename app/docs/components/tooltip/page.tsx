import type { Metadata, NextPage } from 'next';
import TooltipPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the following Tailwind CSS powered tooltips to show extra content when hovering or focusing on an element"',
  title: 'React Tooltip - Flowbite',
};

const TooltipPage: NextPage = () => {
  return <TooltipPageContent />;
};

export default TooltipPage;
