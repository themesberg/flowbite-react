import { List, ListItem } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { List } from "flowbite-react";

export function Component() {
  return (
    <List horizontal>
      <List.Item>About</List.Item>
      <List.Item>Premium</List.Item>
      <List.Item>Campaigns</List.Item>
      <List.Item>Blog</List.Item>
      <List.Item>Affiliate Program</List.Item>
      <List.Item>FAQs</List.Item>
      <List.Item>Contact</List.Item>
    </List>
  );
}
`;

const codeRSC = `
import { List, ListItem } from "flowbite-react";

export function Component() {
  return (
    <List horizontal>
      <ListItem>About</ListItem>
      <ListItem>Premium</ListItem>
      <ListItem>Campaigns</ListItem>
      <ListItem>Blog</ListItem>
      <ListItem>Affiliate Program</ListItem>
      <ListItem>FAQs</ListItem>
      <ListItem>Contact</ListItem>
    </List>
  );
}
`;

export function Component() {
  return (
    <List horizontal>
      <ListItem>About</ListItem>
      <ListItem>Premium</ListItem>
      <ListItem>Campaigns</ListItem>
      <ListItem>Blog</ListItem>
      <ListItem>Affiliate Program</ListItem>
      <ListItem>FAQs</ListItem>
      <ListItem>Contact</ListItem>
    </List>
  );
}

export const horizontal: CodeData = {
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
    {
      fileName: "server",
      language: "tsx",
      code: codeRSC,
    },
  ],
  githubSlug: "list/list.horizontal.tsx",
  component: <Component />,
};
