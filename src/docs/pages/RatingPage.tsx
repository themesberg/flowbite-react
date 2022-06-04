import type { FC } from 'react';
import { Rating } from '../../lib';
import type { CodeExample } from './DemoPage';
import { DemoPage } from './DemoPage';

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
    {
      title: 'Rating with text',
      code: (
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
          <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
        </Rating>
      ),
    },
    {
      title: 'Rating count',
      code: (
        <Rating>
          <Rating.Star />
          <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
          <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400"></span>
          <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
            73 reviews
          </a>
        </Rating>
      ),
    },
    {
      title: 'Star sizing',
      code: (
        <>
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
          </Rating>
          <Rating size="md">
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
          </Rating>
          <Rating size="lg">
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
          </Rating>
        </>
      ),
    },
    {
      title: 'Advanced rating',
      code: (
        <>
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
          </Rating>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
          <Rating.Advanced percentFilled={70}>5 star</Rating.Advanced>
          <Rating.Advanced percentFilled={17}>4 star</Rating.Advanced>
          <Rating.Advanced percentFilled={8}>3 star</Rating.Advanced>
          <Rating.Advanced percentFilled={4}>2 star</Rating.Advanced>
          <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
        </>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default RatingPage;
