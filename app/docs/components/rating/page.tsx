import type { Metadata, NextPage } from 'next';
import RatingPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the rating component to show reviews and testimonials from your users using stars and scores based on multiple styles and sizes',
  title: 'React Rating - Flowbite',
};

const RatingPage: NextPage = () => {
  return <RatingPageContent />;
};

export default RatingPage;
