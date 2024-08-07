import type { Meta, StoryFn } from "@storybook/react";
import { Skeleton } from "./Skeleton";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
} as Meta<typeof Skeleton>;

const Template: StoryFn<typeof Skeleton> = (args) => {
  return (
    <div {...args}>
      <Skeleton />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: "default",
};

const CardTemplate: StoryFn<typeof Skeleton.Card> = (args) => {
  return (
    <div {...args}>
      <Skeleton.Card />
    </div>
  );
};

export const CardSkeleton = CardTemplate.bind({});

const ImageTemplate: StoryFn<typeof Skeleton.Image> = (args) => {
  return (
    <div {...args}>
      <Skeleton.Image />
    </div>
  );
};

export const ImageSkeleton = ImageTemplate.bind({});

const ListTemplate: StoryFn<typeof Skeleton.List> = (args) => {
  return (
    <div {...args}>
      <Skeleton.List />
    </div>
  );
};

export const ListSkeleton = ListTemplate.bind({});

const TestimonialTemplate: StoryFn<typeof Skeleton.Testimonial> = (args) => {
  return (
    <div {...args}>
      <Skeleton.Testimonial />
    </div>
  );
};

export const TestimonialSkeleton = TestimonialTemplate.bind({});

const VideoTemplate: StoryFn<typeof Skeleton.Video> = (args) => {
  return (
    <div {...args}>
      <Skeleton.Video />
    </div>
  );
};

export const VideoSkeleton = VideoTemplate.bind({});
