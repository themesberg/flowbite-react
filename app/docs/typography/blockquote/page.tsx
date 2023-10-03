import type { Metadata, NextPage } from 'next';
import BlockquotePageContent from '.';

export const metadata: Metadata = {
  description:
    'The blockquote component can be used to quote text content from an external source that can be used for testimonials, reviews, and quotes inside an article',
  title: 'React Blockquote - Flowbite',
};

const BlockquotePage: NextPage = () => {
  return <BlockquotePageContent />;
};

export default BlockquotePage;
