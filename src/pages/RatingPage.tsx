import { FC } from 'react';
import { Rating } from '../components/rating/Rating';
import { CodeExample, DemoPage } from './DemoPage';

const RatingPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default rating',
      code: (
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
        </Rating>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default RatingPage;
