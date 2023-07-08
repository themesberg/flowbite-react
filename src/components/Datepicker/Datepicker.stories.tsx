import type { Meta, StoryFn } from '@storybook/react';
import { Datepicker, type DatepickerProps } from './Datepicker';

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
  argTypes: {
    language: {
      control: 'select',
      options: ['en', 'pt-BR'],
    },
  },
} as Meta;

const Template: StoryFn<DatepickerProps> = (args) => <Datepicker {...args} />;

export const Default = Template.bind({});
Default.args = {};
