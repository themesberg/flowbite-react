import { Button, ButtonGroup } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Button, ButtonGroup } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <ButtonGroup outline>
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
      <ButtonGroup outline>
        <Button gradientMonochrome="info">
          <HiUserCircle className="mr-3 h-4 w-4" />
          Profile
        </Button>
        <Button gradientMonochrome="info">
          <HiAdjustments className="mr-3 h-4 w-4" />
          Settings
        </Button>
        <Button gradientMonochrome="info">
          <HiCloudDownload className="mr-3 h-4 w-4" />
          Messages
        </Button>
      </ButtonGroup>
      <ButtonGroup outline>
        <Button gradientDuoTone="cyanToBlue">
          <HiUserCircle className="mr-3 h-4 w-4" />
          Profile
        </Button>
        <Button gradientDuoTone="cyanToBlue">
          <HiAdjustments className="mr-3 h-4 w-4" />
          Settings
        </Button>
        <Button gradientDuoTone="cyanToBlue">
          <HiCloudDownload className="mr-3 h-4 w-4" />
          Messages
        </Button>
      </ButtonGroup>
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <ButtonGroup outline>
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
      <ButtonGroup outline>
        <Button gradientMonochrome="info">
          <HiUserCircle className="mr-3 h-4 w-4" />
          Profile
        </Button>
        <Button gradientMonochrome="info">
          <HiAdjustments className="mr-3 h-4 w-4" />
          Settings
        </Button>
        <Button gradientMonochrome="info">
          <HiCloudDownload className="mr-3 h-4 w-4" />
          Messages
        </Button>
      </ButtonGroup>
      <ButtonGroup outline>
        <Button gradientDuoTone="cyanToBlue">
          <HiUserCircle className="mr-3 h-4 w-4" />
          Profile
        </Button>
        <Button gradientDuoTone="cyanToBlue">
          <HiAdjustments className="mr-3 h-4 w-4" />
          Settings
        </Button>
        <Button gradientDuoTone="cyanToBlue">
          <HiCloudDownload className="mr-3 h-4 w-4" />
          Messages
        </Button>
      </ButtonGroup>
    </div>
  );
}

export const outlineWithIcons: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "buttonGroup/buttonGroup.outlineWithIcons.tsx",
  component: <Component />,
};
