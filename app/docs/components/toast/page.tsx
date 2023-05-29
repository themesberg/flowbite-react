import type { Metadata, NextPage } from 'next';
import ToastPageContent from '.';

export const metadata: Metadata = {
  description:
    'Push notifications to your website visitors using the toast component and choose from multiple sizes, colors, styles, position and icons based on React and Tailwind CSS',
  title: 'React Toast - Flowbite',
};

const ToastPage: NextPage = () => {
  return <ToastPageContent />;
};

export default ToastPage;
