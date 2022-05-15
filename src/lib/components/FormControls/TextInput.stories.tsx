import { Meta, Story } from '@storybook/react/types-6-0';

import { TextInput, TextInputProps } from './TextInput';

export default {
  title: 'Components/FormControls',
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Text input';
Default.args = {};
