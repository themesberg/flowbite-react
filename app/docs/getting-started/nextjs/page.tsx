import type { Metadata, NextPage } from 'next';
import NextjsPageContent from '.';

export const metadata: Metadata = {
  description: 'Copy the starter or follow the steps below to get started with Flowbite React in Next.js.',
  title: 'Use with Next.js - Flowbite React',
};

const NextjsPage: NextPage = () => {
  return <NextjsPageContent />;
};

export default NextjsPage;
