import type { Meta, StoryFn } from '@storybook/react';
import { HiMail } from 'react-icons/hi';
import type { TextInputProps } from './TextInput';
import { TextInput } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as Meta;

export const Default: StoryFn<TextInputProps> = (args) => <TextInput {...args} />;

export const WithIcon: StoryFn<TextInputProps> = (args) => <TextInput {...args} />;
WithIcon.args = {
  placeholder: 'Enter your email address',
  renderIcon: (style) => <HiMail className={style} />,
};

export const WithRightIcon: StoryFn<TextInputProps> = (args) => <TextInput {...args} />;
WithRightIcon.args = {
  placeholder: 'Enter your email address',
  renderRightIcon: (style) => <HiMail className={style} />,
};

export const WithBothIcons: StoryFn<TextInputProps> = (args) => <TextInput {...args} />;
WithBothIcons.args = {
  placeholder: 'Enter your email address',
  renderIcon: (style) => <HiMail className={style} />,
  renderRightIcon: (style) => <HiMail className={style} />,
};
