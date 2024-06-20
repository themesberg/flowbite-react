import type { Meta, StoryFn } from "@storybook/react";
import { FaPhoneAlt } from "react-icons/fa";
import type { PhoneInputProps } from "./PhoneInput";
import { PhoneInput } from "./PhoneInput";

export default {
  title: "Components/PhoneInput",
  component: PhoneInput,
} as Meta;

const Template: StoryFn<PhoneInputProps> = (args) => {
  return (
    <form className="mx-auto max-w-sm">
      <PhoneInput {...args} />
    </form>
  );
};

export const Default = Template.bind({});
Default.storyName = "Phone Input";
Default.args = {
  placeholder: "123-456-7890",
  pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
  required: true,
};

export const WithRightIcon = Template.bind({});
WithRightIcon.storyName = "Phone Input with Right Icon";
WithRightIcon.args = {
  placeholder: "123-456-7890",
  pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
  required: true,
  rightIcon: FaPhoneAlt,
};

export const WithHelperText = Template.bind({});
WithHelperText.storyName = "Phone Input with Helper Text";
WithHelperText.args = {
  placeholder: "123-456-7890",
  pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
  required: true,
  helperText: "Select a phone number that matches the format.",
};
