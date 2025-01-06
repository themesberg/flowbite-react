import { Button, ButtonGroup } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Button, ButtonGroup } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";

export function Component() {
  return (
    <ButtonGroup>
      <Button color="gray">
        <HiUserCircle className="mr-3 h-4 w-4" />
        Profile
      </Button>
      <Button color="gray">
        <HiAdjustments className="mr-3 h-4 w-4" />
        Settings
      </Button>
      <Button color="gray">
        <HiCloudDownload className="mr-3 h-4 w-4" />
        Messages
      </Button>
    </ButtonGroup>
  );
}
`;

export function Component() {
  return (
    <ButtonGroup>
      <Button color="gray">
        <HiUserCircle className="mr-3 h-4 w-4" />
        Profile
      </Button>
      <Button color="gray">
        <HiAdjustments className="mr-3 h-4 w-4" />
        Settings
      </Button>
      <Button color="gray">
        <HiCloudDownload className="mr-3 h-4 w-4" />
        Messages
      </Button>
    </ButtonGroup>
  );
}

export const withIcons: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "buttonGroup/buttonGroup.withIcons.tsx",
  component: <Component />,
};
