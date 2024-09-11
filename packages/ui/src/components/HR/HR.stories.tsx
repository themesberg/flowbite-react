import type { Meta, StoryFn } from "@storybook/react";
import type { HRProps } from "./HR";
import { HR } from "./HR";
import { HRIcon } from "./HRIcon";
import type { HRIconProps } from "./HRIcon";
import type { HRSquareProps } from "./HRSquare";
import { HRSquare } from "./HRSquare";
import { HRText } from "./HRText";
import type { HRTextProps } from "./HRText";
import type { HRTrimmedProps } from "./HRTrimmed";
import { HRTrimmed } from "./HRTrimmed";

export default {
  title: "Components/HR",
  component: HR,
} as Meta;

const Template: StoryFn<HRProps> = (args) => <HR {...args} />;

export const DefaultHR = Template.bind({});
DefaultHR.args = {};

const TrimmedTemplate: StoryFn<HRTrimmedProps> = (args) => <HRTrimmed {...args} />;

export const TrimmedHR = TrimmedTemplate.bind({});
TrimmedHR.args = {};

const IconTemplate: StoryFn<HRIconProps> = (args) => <HRIcon {...args} />;

export const IconHR = IconTemplate.bind({});
IconHR.args = {};

const TextTemplate: StoryFn<HRTextProps> = (args) => <HRText {...args} />;

export const TextHR = TextTemplate.bind({});
TextHR.args = {
  text: "or",
};

const SquareTemplate: StoryFn<HRSquareProps> = (args) => <HRSquare {...args} />;

export const SquareHR = SquareTemplate.bind({});
SquareHR.args = {};
