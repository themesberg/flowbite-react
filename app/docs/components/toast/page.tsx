import type { Metadata, NextPage } from 'next';
import ToastPageContent from '.';

export const metadata: Metadata = {
  description:
    'Push notifications to your users using the toast component and choose from multiple sizes, colors, styles, and positions',
  title: 'React Toast - Flowbite',
};

const ToastPage: NextPage = () => {
  return <ToastPageContent />;
};

export default ToastPage;
