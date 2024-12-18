import type { Meta, StoryFn } from "@storybook/react";
import { ThemeProvider } from "../../theme/provider";
import { DarkThemeToggle } from "./DarkThemeToggle";

export default {
  title: "Components/DarkThemeToggle",
  component: DarkThemeToggle,
} as Meta;

const Template: StoryFn = (args) => (
  <ThemeProvider>
    <DarkThemeToggle {...args} />
  </ThemeProvider>
);

export const DefaultDarkThemeToggle = Template.bind({});
DefaultDarkThemeToggle.storyName = "Default";
DefaultDarkThemeToggle.args = {};
