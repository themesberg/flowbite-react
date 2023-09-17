import type { Metadata, NextPage } from 'next';
import KbdPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the Kbd component as an inline element to denote textual user input from the keyboard inside paragraphs, tables, and other components',
  title: 'React Forms - Flowbite',
};

const KbdPage: NextPage = () => {
  return <KbdPageContent />;
};

export default KbdPage;
