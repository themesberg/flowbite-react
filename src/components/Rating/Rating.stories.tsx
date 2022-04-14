import { Meta, Story } from '@storybook/react/types-6-0';

import { Rating, RatingProps } from '.';

export default {
  title: 'Components/Ratings',
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
