import type { Meta, StoryFn } from "@storybook/react";
import { Flowbite } from "../Flowbite";
import { DarkThemeToggle } from "./DarkThemeToggle";

export default {
  title: "Components/DarkThemeToggle",
  component: DarkThemeToggle,
} as Meta;

const Template: StoryFn = (args) => (
  <Flowbite>
    <DarkThemeToggle {...args} />
  </Flowbite>
);

export const DefaultDarkThemeToggle = Template.bind({});
DefaultDarkThemeToggle.storyName = "Default";
DefaultDarkThemeToggle.args = {};
