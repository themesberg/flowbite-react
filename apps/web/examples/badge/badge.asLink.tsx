import { Badge } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Badge } from "flowbite-react";

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge href="#">Default</Badge>
      <Badge size="sm" href="#">
        Default
      </Badge>
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge href="#">Default</Badge>
      <Badge size="sm" href="#">
        Default
      </Badge>
    </div>
  );
}

export const asLink: CodeData = {
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
  ],
  githubSlug: "badge/badge.asLink.tsx",
  component: <Component />,
};
