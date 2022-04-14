import { Meta, Story } from '@storybook/react/types-6-0';
import { HiFire } from 'react-icons/hi';

import { Toast, ToastComponentProps } from '.';

export default {
  title: 'Components/Toast',
  component: Toast,
} as Meta;

export const Default: Story<ToastComponentProps> = (args) => {
  return (
    <Toast {...args}>
      <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200">
        <HiFire className="h-5 w-5" />
      </div>
      <div className="ml-3 text-sm font-normal">Set yourself free.</div>
      <Toast.Toggle />
    </Toast>
  );
};

Default.storyName = 'Default';
Default.args = {
  className:
    'flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400',
};
