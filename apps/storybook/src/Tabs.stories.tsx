import type { Meta } from "@storybook/react";
import type { TabsProps } from "flowbite-react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

export default {
  title: "Components/Tabs",
  component: Tabs,
  args: {
    className: "bg-white rounded-lg dark:bg-gray-800 dark:text-white",
  },
  argTypes: {
    className: {
      control: "text",
    },
    variant: {
      control: "radio",
      options: ["default", "underline", "pills", "fullWidth"],
    },
  },
} as Meta;

export const Default = (args: TabsProps): JSX.Element => (
  <Tabs {...args}>
    <Tabs.Item title="Profile">Profile content</Tabs.Item>
    <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
    <Tabs.Item title="Settings">Settings content</Tabs.Item>
    <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
    <Tabs.Item disabled title="Disabled">
      Disabled content
    </Tabs.Item>
  </Tabs>
);

export const WithUnderline = (args: TabsProps): JSX.Element => (
  <Tabs {...args}>
    <Tabs.Item title="Profile">Profile content</Tabs.Item>
    <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
    <Tabs.Item title="Settings">Settings content</Tabs.Item>
    <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
    <Tabs.Item disabled title="Disabled">
      Disabled content
    </Tabs.Item>
  </Tabs>
);
WithUnderline.args = {
  variant: "underline",
};
WithUnderline.storyName = "With underline";

export const WithIcons = (args: TabsProps): JSX.Element => (
  <Tabs {...args}>
    <Tabs.Item title="Profile" icon={HiUserCircle}>
      Profile content
    </Tabs.Item>
    <Tabs.Item active={true} title="Dashboard" icon={MdDashboard}>
      Dashboard content
    </Tabs.Item>
    <Tabs.Item title="Settings" icon={HiAdjustments}>
      Settings content
    </Tabs.Item>
    <Tabs.Item title="Contacts" icon={HiClipboardList}>
      Contacts content
    </Tabs.Item>
    <Tabs.Item disabled={true} title="Disabled">
      Disabled content
    </Tabs.Item>
  </Tabs>
);
WithIcons.args = {
  variant: "underline",
};
WithIcons.storyName = "With icons";

export const Pills = (args: TabsProps): JSX.Element => (
  <Tabs {...args}>
    <Tabs.Item title="Profile">Profile content</Tabs.Item>
    <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
    <Tabs.Item title="Settings">Settings content</Tabs.Item>
    <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
    <Tabs.Item disabled title="Disabled">
      Disabled content
    </Tabs.Item>
  </Tabs>
);
Pills.args = {
  variant: "pills",
};

export const FullWidth = (args: TabsProps): JSX.Element => (
  <Tabs {...args}>
    <Tabs.Item title="Profile">Profile content</Tabs.Item>
    <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
    <Tabs.Item title="Settings">Settings content</Tabs.Item>
    <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
    <Tabs.Item disabled title="Disabled">
      Disabled content
    </Tabs.Item>
  </Tabs>
);
FullWidth.args = {
  variant: "fullWidth",
};
FullWidth.storyName = "Full width";
