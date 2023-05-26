import type { Metadata, NextPage } from 'next';
import ModalPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the modal component to show interactive dialogs and notifications to your website users available in multiple sizes, colors, and styles',
  title: 'React Modal - Flowbite',
};

const ModalPage: NextPage = () => {
  return <ModalPageContent />;
};

export default ModalPage;
