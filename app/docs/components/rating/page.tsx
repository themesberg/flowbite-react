import type { Metadata, NextPage } from 'next';
import RatingPageContent from '.';

export const metadata: Metadata = {
  description:
    'Get started with the rating component from Flowbite React to show testimonials and user reviews of your products using stars, labels and advanced layouts',
  title: 'React Rating - Flowbite',
};

const RatingPage: NextPage = () => {
  return <RatingPageContent />;
};

export default RatingPage;
