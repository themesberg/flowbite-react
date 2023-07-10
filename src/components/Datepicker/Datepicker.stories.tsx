import type { Meta, StoryFn } from '@storybook/react';
import type { DatepickerProps } from './Datepicker';
import { Datepicker } from './Datepicker';

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
  argTypes: {
    language: {
      control: {
        type: 'select',
        options: ['en', 'pt-BR'],
      },
    },
  },
} as Meta;

const Template: StoryFn<DatepickerProps> = (args) => <Datepicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: false,
  autoHide: true,
  showClearButton: true,
  showTodayButton: true,
  defaultDate: new Date(),
  minDate: undefined,
  maxDate: undefined,
  language: 'en',
  theme: {},
};
