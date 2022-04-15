import { Meta, Story } from '@storybook/react/types-6-0';

import { Textarea, TextareaProps } from './Textarea';

export default {
  title: 'Components/FormControls',
  component: Textarea,
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const DefaultTextarea = Template.bind({});
DefaultTextarea.storyName = 'Textarea';
DefaultTextarea.args = {
  children: 'Text',
};
