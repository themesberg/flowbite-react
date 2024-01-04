import type { Meta, StoryFn } from "@storybook/react";
import type { DatepickerProps } from "./Datepicker";
import { Datepicker } from "./Datepicker";
import { getFirstDateInRange, WeekStart } from "./helpers";

export default {
  title: "Components/Datepicker",
  component: Datepicker,
  argTypes: {
    language: {
      control: {
        type: "select",
        options: ["en", "pt-BR"],
      },
    },
    value: { control: { type: 'date', format: 'MM/DD/YYYY' } },
    defaultValue: { control: { type: 'date', format: 'MM/DD/YYYY' } },
    label: { control: { type: 'text' } },
    weekStart: {
      options: Object.values(WeekStart).filter((x) => typeof x === "string"),
      mapping: Object.entries(WeekStart)
        .filter(([, value]) => typeof value !== "string")
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}),
      control: {
        type: "select",
        labels: Object.entries(WeekStart)
          .filter(([, value]) => typeof value !== "string")
          .reduce((acc, [key, value]) => ({ ...acc, [value]: key }), {}),
      },
    },
  },
} as Meta;

const Template: StoryFn<DatepickerProps> = (args) => {
  // https://github.com/storybookjs/storybook/issues/11822
  if (args.minDate) {
    args.minDate = new Date(args.minDate);
  }
  if (args.maxDate) {
    args.maxDate = new Date(args.maxDate);
  }

  if (args.value) {
    args.value = new Date(args.value);
  }

  if (args.defaultValue) {
    args.defaultValue = new Date(args.defaultValue);
  }
  // update defaultValue based on the range
  if (args.minDate && args.maxDate) {
    if (args.defaultValue) {
      args.defaultValue = getFirstDateInRange(args.defaultValue, args.minDate, args.maxDate);
    }
  }

  return <Datepicker {...args} />;
};
export const DefaultEmpty = Template.bind({});
DefaultEmpty.args = {
  open: false,
  autoHide: true,
  showClearButton: true,
  showTodayButton: true,
  defaultValue: undefined,
  value: undefined,
  minDate: undefined,
  maxDate: undefined,
  language: 'en',
  theme: {},
};

export const Default = Template.bind({});
Default.args = {
  open: false,
  autoHide: true,
  showClearButton: true,
  showTodayButton: true,
  defaultValue: new Date(2023, 0, 18),
  value: undefined,
  minDate: undefined,
  maxDate: undefined,
  language: 'en',
  theme: {},
};

export const NullDateValue = Template.bind({});
NullDateValue.args = {
  open: false,
  autoHide: true,
  showClearButton: true,
  showTodayButton: true,
  defaultValue: new Date(),
  value: null,
  minDate: undefined,
  maxDate: undefined,
  language: 'en',
  theme: {},
};

export const DateValueSet = Template.bind({});
DateValueSet.args = {
  open: false,
  autoHide: true,
  showClearButton: true,
  showTodayButton: true,
  defaultValue: new Date(),
  value: new Date(2021, 0, 15),
  minDate: undefined,
  maxDate: undefined,
  language: 'en',
  theme: {},
};

export const EmptyDates = Template.bind({});
EmptyDates.args = {
  open: false,
  autoHide: true,
  showClearButton: true,
  showTodayButton: true,
  defaultValue: undefined,
  value: undefined,
  minDate: undefined,
  maxDate: undefined,
  language: "en",
  weekStart: WeekStart.Sunday,
  theme: {},
  label: 'No date selected',
};
