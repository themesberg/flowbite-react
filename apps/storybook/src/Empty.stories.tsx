import type { Meta, StoryFn } from "@storybook/react-vite";
import { Button, Empty } from "flowbite-react";
import type { EmptyProps } from "flowbite-react";

export default {
  title: "Components/Empty",
  component: Empty,
} as Meta;

const Template: StoryFn<EmptyProps> = (args) => <Empty {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithCustomText = Template.bind({});
WithCustomText.storyName = "With custom text";
WithCustomText.args = {
  title: "No projects yet",
  description: "Create your first project to start organizing your workspace.",
};

export const WithAction = Template.bind({});
WithAction.storyName = "With action";
WithAction.args = {
  title: "No team members",
  description: "Invite people to collaborate with you.",
  children: <Button size="sm">Invite members</Button>,
};

export const WithoutDescription = Template.bind({});
WithoutDescription.storyName = "Without description";
WithoutDescription.args = {
  title: "Nothing selected",
  description: null,
};
