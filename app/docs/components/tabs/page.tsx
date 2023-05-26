import type { Metadata, NextPage } from 'next';
import TabsPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use these responsive tabs components to create a secondary navigational hierarchy for your website or toggle content inside a container',
  title: 'React Tabs - Flowbite',
};

const TabsPage: NextPage = () => {
  return <TabsPageContent />;
};

export default TabsPage;
