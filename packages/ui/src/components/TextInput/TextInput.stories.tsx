import type { Meta, StoryFn } from "@storybook/react";
import type { TextInputProps } from "./TextInput";
import { TextInput } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
} as Meta;

const Template: StoryFn<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.storyName = "Text input";
Default.args = {};
