import type { Metadata, NextPage } from 'next';
import TabsPageContent from '.';

export const metadata: Metadata = {
  description:
    'Get started with the tabs component from Flowbite React to show a list of tab items where you can switch between them using multiple styles, colors and layouts',
  title: 'React Tabs - Flowbite',
};

const TabsPage: NextPage = () => {
  return <TabsPageContent />;
};

export default TabsPage;
