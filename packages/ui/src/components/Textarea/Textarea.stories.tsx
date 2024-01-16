import type { Meta, StoryFn } from '@storybook/react';
import type { TextareaProps } from './Textarea';
import { Textarea } from './Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as Meta;

const Template: StoryFn<TextareaProps> = (args) => <Textarea {...args} />;

export const DefaultTextarea = Template.bind({});
DefaultTextarea.storyName = 'Textarea';
DefaultTextarea.args = {
  children: 'Text',
};
