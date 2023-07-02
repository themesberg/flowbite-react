import type { Metadata, NextPage } from 'next';
import SidebarPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the sidebar component to show a list of menu items including multi-level dropdown menu on the left or right side of your page for admin dashboards and applications',
  title: 'React Sidebar - Flowbite',
};

const SidebarPage: NextPage = () => {
  return <SidebarPageContent />;
};

export default SidebarPage;
