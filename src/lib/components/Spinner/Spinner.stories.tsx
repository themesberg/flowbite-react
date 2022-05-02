import { Meta, Story } from '@storybook/react/types-6-0';

import { Spinner } from '.';

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as Meta;

const Template: Story = (args) => <Spinner {...args} />;

export const DefaultSpinner = Template.bind({});
DefaultSpinner.storyName = 'Default';
DefaultSpinner.args = {};
