import type { Meta, Story } from '@storybook/react/types-6-0';
import type { FileInputProps } from './FileInput';
import { FileInput } from './FileInput';

export default {
  title: 'Components/FormControls',
  component: FileInput,
} as Meta;

const Template: Story<FileInputProps> = (args) => <FileInput {...args} />;

export const DefaultFileInput = Template.bind({});
DefaultFileInput.storyName = 'FileInput';
DefaultFileInput.args = {};
