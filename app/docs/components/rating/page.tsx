'use client';

import type { FC } from 'react';
import { CodePreview } from '~/app/components/code-preview';
import { Rating } from '~/src';
import { DocsContentLayout } from '../../../components/docs-content-layout';

const RatingPage: FC = () => (
  <DocsContentLayout
    title="React Rating - Flowbite"
    description="Use the rating component to show reviews and testimonials from your users using stars and scores based on multiple styles and sizes"
  >
    <CodePreview title="Default rating">
      <Rating>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
      </Rating>
    </CodePreview>
    <CodePreview title="Rating with text">
      <Rating>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
      </Rating>
    </CodePreview>
    <CodePreview title="Rating count">
      <Rating>
        <Rating.Star />
        <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
        <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400"></span>
        <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
          73 reviews
        </a>
      </Rating>
    </CodePreview>
    <CodePreview title="Star sizing">
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
    </CodePreview>
    <CodePreview title="Advanced rating">
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
    </CodePreview>
  </DocsContentLayout>
);

export default RatingPage;
