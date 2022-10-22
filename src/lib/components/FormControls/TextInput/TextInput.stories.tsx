import type { Meta, Story } from '@storybook/react/types-6-0';
import type { TextInputProps } from './TextInput';
import { TextInput } from './TextInput';

export default {
  title: 'Components/FormControls',
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Text input';
Default.args = {};
