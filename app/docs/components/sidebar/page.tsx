import type { Metadata, NextPage } from 'next';
import SidebarPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the sidebar component to show a list of menu items and multi-level dropdown items on either side of the page to navigate on your website',
  title: 'React Sidebar - Flowbite',
};

const SidebarPage: NextPage = () => {
  return <SidebarPageContent />;
};

export default SidebarPage;
