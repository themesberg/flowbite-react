import type { Meta, Story } from '@storybook/react/types-6-0';
import { HiFire } from 'react-icons/hi';
import type { ToastProps } from '.';
import { Toast } from '.';

export default {
  title: 'Components/Toast',
  component: Toast,
} as Meta;

export const DefaultToast: Story<ToastProps> = (args) => {
  return (
    <Toast {...args}>
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200">
        <HiFire className="h-5 w-5" />
      </div>
      <div className="ml-3 text-sm font-normal">Set yourself free.</div>
      <Toast.Toggle />
    </Toast>
  );
};

DefaultToast.storyName = 'Default';
