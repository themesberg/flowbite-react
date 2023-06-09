import type { Metadata, NextPage } from 'next';
import TypeScriptPageContent from '.';

export const metadata: Metadata = {
  description:
    'Learn how to get started with the free and open-source Flowbite React UI component library based on the utility classes from Tailwind CSS',
  title: 'React TypeScript Types - Flowbite',
};

const TypeScriptPage: NextPage = () => {
  return <TypeScriptPageContent />;
};

export default TypeScriptPage;
