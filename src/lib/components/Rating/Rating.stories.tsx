import type { Meta, Story } from '@storybook/react/types-6-0';
import type { RatingProps } from '.';
import { Rating } from '.';

export default {
  title: 'Components/Rating',
  component: Rating,
} as Meta;

const Template: Story<RatingProps> = (args) => <Rating {...args} />;

export const DefaultRating = Template.bind({});
DefaultRating.storyName = 'Default';
DefaultRating.args = {
  children: (
    <>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
    </>
  ),
};

export const WithText = Template.bind({});
WithText.storyName = 'With text';
WithText.args = {
  children: (
    <>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
    </>
  ),
};

export const RatingCount = Template.bind({});
RatingCount.storyName = 'With rating count';
RatingCount.args = {
  children: (
    <>
      <Rating.Star />
      <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
      <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
      <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
        73 reviews
      </a>
    </>
  ),
};

export const Advanced = (): JSX.Element => (
  <div className="flex flex-col gap-4">
    <Rating className="pt-3">
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
    </Rating>
    <p className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
    <Rating.Advanced percentFilled={70}>5 star</Rating.Advanced>
    <Rating.Advanced percentFilled={17}>4 star</Rating.Advanced>
    <Rating.Advanced percentFilled={8}>3 star</Rating.Advanced>
    <Rating.Advanced percentFilled={4}>2 star</Rating.Advanced>
    <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
  </div>
);
