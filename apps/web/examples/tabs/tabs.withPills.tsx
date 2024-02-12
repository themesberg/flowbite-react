"use client";

import { Tabs } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
import { Tabs } from "flowbite-react";

function Component() {
  return (
    <Tabs aria-label="Pills" style="pills">
      <Tabs.Item active title="Tab 1">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 1</p>
      </Tabs.Item>
      <Tabs.Item title="Tab 2">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 2</p>
      </Tabs.Item>
      <Tabs.Item title="Tab 3">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 3</p>
      </Tabs.Item>
      <Tabs.Item title="Tab 4">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 4</p>
      </Tabs.Item>
      <Tabs.Item disabled title="Tab 5">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 5</p>
      </Tabs.Item>
    </Tabs>
  );
}
`;

function Component() {
  return (
    <Tabs aria-label="Pills" style="pills">
      <Tabs.Item active title="Tab 1">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 1</p>
      </Tabs.Item>
      <Tabs.Item title="Tab 2">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 2</p>
      </Tabs.Item>
      <Tabs.Item title="Tab 3">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 3</p>
      </Tabs.Item>
      <Tabs.Item title="Tab 4">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 4</p>
      </Tabs.Item>
      <Tabs.Item disabled title="Tab 5">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 5</p>
      </Tabs.Item>
    </Tabs>
  );
}

export const withPills: CodeData = {
  type: "single",
  code: {
    fileName: "client",
    language: "tsx",
    code,
  },
  githubSlug: "tabs/tabs.withPills.tsx",
  component: <Component />,
};
