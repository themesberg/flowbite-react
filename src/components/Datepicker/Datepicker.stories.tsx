import type { Meta, StoryFn } from '@storybook/react';
import type { DatepickerProps } from './Datepicker';
import { Datepicker } from './Datepicker';
import { WeekStart } from './helpers';

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
    weekStart: {
      options: Object.values(WeekStart).filter((x) => typeof x === 'string'),
      mapping: WeekStart,
      control: {
        type: 'select',
        labels: Object.entries(WeekStart)
          .filter(([, value]) => typeof value !== 'string')
          .reduce((acc, [key, value]) => ({ ...acc, [value]: key }), {}),
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
  weekStart: WeekStart.Sunday,
  theme: {},
};
