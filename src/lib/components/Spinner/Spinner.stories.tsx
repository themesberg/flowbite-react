import { Meta, Story } from '@storybook/react/types-6-0';

import { Spinner } from '.';
import { Button } from '../Button';

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as Meta;

const Template: Story = (args) => <Spinner {...args} />;

export const DefaultSpinner = Template.bind({});
DefaultSpinner.storyName = 'Default';
DefaultSpinner.args = {
  title: 'Default spinner example',
  size: 'md',
};

export const Alignment = (): JSX.Element => (
  <div className="flex w-1/3 flex-col gap-3 bg-gray-50 p-6">
    <div className="text-left">
      <Spinner aria-label="Left-aligned spinner example" />
    </div>
    <div className="text-center">
      <Spinner aria-label="Center-aligned spinner example" />
    </div>
    <div className="text-right">
      <Spinner aria-label="Right-aligned spinner example" />
    </div>
  </div>
);

export const Colors = (): JSX.Element => (
  <div className="flex flex-row gap-3">
    <Spinner color="blue" aria-label="Blue spinner example" />
    <Spinner color="green" aria-label="Green spinner example" />
    <Spinner color="red" aria-label="Red spinner example" />
    <Spinner color="yellow" aria-label="Yellow spinner example" />
    <Spinner color="pink" aria-label="Pink spinner example" />
    <Spinner color="purple" aria-label="Purple spinner example" />
  </div>
);

export const Sizes = (): JSX.Element => (
  <div className="flex flex-row gap-3">
    <Spinner aria-label="Extra small spinner example" size="xs" />
    <Spinner aria-label="Small spinner example" size="sm" />
    <Spinner aria-label="Medium sized spinner example" size="md" />
    <Spinner aria-label="Large spinner example" size="lg" />
    <Spinner aria-label="Extra large spinner example" size="xl" />
  </div>
);

export const Buttons = (): JSX.Element => (
  <div className="flex flex-row gap-3">
    <Button>
      <Spinner aria-label="Spinner button example" />
      <span className="pl-3">Loading...</span>
    </Button>
    <Button color="alternative">
      <Spinner aria-label="Alternate spinner button example" />
      <span className="pl-3">Loading...</span>
    </Button>
  </div>
);
