import type { Meta, Story } from '@storybook/react/types-6-0';
import type { ProgressProps } from '.';
import { Progress } from '.';

export default {
  title: 'Components/Progress',
  component: Progress,
  decorators: [
    (Story): JSX.Element => (
      <div className="flex w-1/2 flex-col">
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ProgressProps> = (args) => <Progress {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 45,
};

export const Sizes = (): JSX.Element => (
  <>
    <div className="text-base font-medium dark:text-white">Small</div>
    <Progress progress={45} size="sm" />
    <div className="mt-3 text-base font-medium dark:text-white">Default</div>
    <Progress progress={45} size="md" />
    <div className="mt-3 text-lg font-medium dark:text-white">Large</div>
    <Progress progress={45} size="lg" />
    <div className="mt-3 text-lg font-medium dark:text-white">Extra Large</div>
    <Progress progress={45} size="xl" />
  </>
);

export const Colors = (): JSX.Element => (
  <>
    <div className="text-base font-medium">Dark</div>
    <Progress progress={45} color="dark" />
    <div className="mt-3 text-base font-medium text-blue-700">Blue</div>
    <Progress progress={45} color="blue" />
    <div className="mt-3 text-base font-medium text-red-700">Red</div>
    <Progress progress={45} color="red" />
    <div className="mt-3 text-base font-medium text-green-700">Green</div>
    <Progress progress={45} color="green" />
    <div className="mt-3 text-base font-medium text-yellow-700">Yellow</div>
    <Progress progress={45} color="yellow" />
    <div className="mt-3 text-base font-medium text-indigo-700">Indigo</div>
    <Progress progress={45} color="indigo" />
    <div className="mt-3 text-base font-medium text-purple-700">Purple</div>
    <Progress progress={45} color="purple" />
  </>
);

export const WithLabelInside = Template.bind({});
WithLabelInside.storyName = 'With label inside';
WithLabelInside.args = {
  label: 'Flowbite',
  progress: 45,
  size: 'lg',
};

export const WithLabelOutside = Template.bind({});
WithLabelOutside.storyName = 'With label outside';
WithLabelOutside.args = {
  label: 'Flowbite',
  labelPosition: 'outside',
  labelProgress: true,
  progress: 45,
};
