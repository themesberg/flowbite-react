import type { Metadata, NextPage } from 'next';
import ModalPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the modal component to show an interactive dialog to your website users that overlays the main content based on multiple sizes, layouts, and styles',
  title: 'React Modal - Flowbite',
};

const ModalPage: NextPage = () => {
  return <ModalPageContent />;
};

export default ModalPage;
