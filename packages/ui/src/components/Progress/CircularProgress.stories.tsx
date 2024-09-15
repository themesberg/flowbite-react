import type { Meta, StoryFn } from "@storybook/react";
import type { CircularProgressProps } from "./ProgressCircular";
import { CircularProgress } from "./ProgressCircular";

export default {
  title: "Components/Circular Progress",
  component: CircularProgress,
  decorators: [
    (Story): JSX.Element => (
      <div className="flex w-1/2 flex-col">
        <Story />
      </div>
    ),
  ],
} as Meta;

const CircularTemplate: StoryFn<CircularProgressProps> = (args) => <CircularProgress {...args} />;

export const CircularProgressBar = CircularTemplate.bind({});
CircularProgressBar.storyName = "Circular Progress";
CircularProgressBar.args = {
  progress: 25,
};

export const CircularProgressBarWithText = CircularTemplate.bind({});
CircularProgressBarWithText.storyName = "Circular Progress With Text";
CircularProgressBarWithText.args = {
  progress: 25,
  labelText: true,
  textLabel: "25%",
};
