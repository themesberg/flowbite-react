import { Meta, Story } from '@storybook/react/types-6-0';

import React from 'react';

import { Alert, AlertProps } from '.';
import { HiInformationCircle, HiEye } from 'react-icons/hi';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const DefaultAlert = Template.bind({});
DefaultAlert.storyName = 'Default';
DefaultAlert.args = {
  children: (
    <>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta minima rerum veritatis optio atque impedit, enim
      quisquam, excepturi consectetur quaerat odio hic, natus aspernatur ex architecto quas dolor nemo alias.
    </>
  ),
};

export const AlertWithIcons = Template.bind({});
AlertWithIcons.storyName = 'Alert with icons';
AlertWithIcons.args = {
  Icon: HiInformationCircle,
  children: (
    <>
      More info about this info alert goes here. This example text is going to run a bit longer so that you can see how
      spacing within an alert works with this kind of content.
    </>
  ),
};

export const AlertDismissible = Template.bind({});
AlertDismissible.storyName = 'Dismissible alert';
AlertDismissible.args = {
  color: 'green',
  onDismiss: function onDismiss() {
    return alert('Alert dismissed!');
  },
  children: <>Info alert! Change a few things up and try submitting again.</>,
};

export const AlertRounded = Template.bind({});
AlertRounded.storyName = 'Do not rounded alert';
AlertRounded.args = {
  rounded: false,
  color: 'yellow',
  children: <>Info alert! Change a few things up and try submitting again.</>,
};

export const AlertWithBorderAccent = Template.bind({});
AlertWithBorderAccent.storyName = 'Border accent';
AlertWithBorderAccent.args = {
  withBorderAccent: true,
  color: 'yellow',
  children: <>Info alert! Change a few things up and try submitting again.</>,
};

export const AlertWithAdditionalContent = Template.bind({});
AlertWithAdditionalContent.storyName = 'Additional content';
AlertWithAdditionalContent.args = {
  withBorderAccent: true,
  Icon: HiInformationCircle,
  color: 'blue',
  additionalContent: (
    <>
      <div className="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
        More info about this info alert goes here. This example text is going to run a bit longer so that you can see
        how spacing within an alert works with this kind of content.
      </div>
      <div className="flex">
        <button
          type="button"
          className="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-900"
        >
          <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
          View more
        </button>
        <button
          type="button"
          className="rounded-lg border border-blue-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 dark:border-blue-800 dark:text-blue-800 dark:hover:text-white"
        >
          Dismiss
        </button>
      </div>
    </>
  ),
  children: (
    <>
      <h3 className="text-lg font-medium text-blue-700 dark:text-blue-800">This is a info alert</h3>
    </>
  ),
};

export const AlertWithAllOptions = Template.bind({});
AlertWithAllOptions.storyName = 'All options';
AlertWithAllOptions.args = {
  color: 'green',
  rounded: false,
  withBorderAccent: true,
  onDismiss: function onDismiss() {
    return alert('Alert dismissed!');
  },
  Icon: HiInformationCircle,

  additionalContent: (
    <>
      <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
        More info about this info alert goes here. This example text is going to run a bit longer so that you can see
        how spacing within an alert works with this kind of content.
      </div>
      <div className="flex">
        <button
          type="button"
          className="mr-2 inline-flex items-center rounded-lg bg-green-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-800 dark:hover:bg-green-900"
        >
          <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
          View more
        </button>
        <button
          type="button"
          className="rounded-lg border border-green-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 dark:border-green-800 dark:text-green-800 dark:hover:text-white"
        >
          Dismiss
        </button>
      </div>
    </>
  ),
  children: <>Info alert! Change a few things up and try submitting again.</>,
};
