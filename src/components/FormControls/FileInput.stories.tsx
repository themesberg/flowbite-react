import { Meta, Story } from '@storybook/react/types-6-0';

import { FileInput, FileInputProps } from './FileInput';

export default {
  title: 'Components/FormControls',
  component: FileInput,
} as Meta;

const Template: Story<FileInputProps> = (args) => <FileInput {...args} />;

export const DefaultFileInput = Template.bind({});
DefaultFileInput.storyName = 'FileInput';
DefaultFileInput.args = {};
