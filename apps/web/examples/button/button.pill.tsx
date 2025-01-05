import { Button } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Button } from "flowbite-react";

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button pill>Default</Button>
      <Button color="blue" pill>
        Blue
      </Button>
      <Button color="gray" pill>
        Gray
      </Button>
      <Button color="dark" pill>
        Dark
      </Button>
      <Button color="light" pill>
        Light
      </Button>
      <Button color="success" pill>
        Success
      </Button>
      <Button color="failure" pill>
        Failure
      </Button>
      <Button color="warning" pill>
        Warning
      </Button>
      <Button color="purple" pill>
        Purple
      </Button>
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button pill>Default</Button>
      <Button color="blue" pill>
        Blue
      </Button>
      <Button color="gray" pill>
        Gray
      </Button>
      <Button color="dark" pill>
        Dark
      </Button>
      <Button color="light" pill>
        Light
      </Button>
      <Button color="success" pill>
        Success
      </Button>
      <Button color="failure" pill>
        Failure
      </Button>
      <Button color="warning" pill>
        Warning
      </Button>
      <Button color="purple" pill>
        Purple
      </Button>
    </div>
  );
}

export const pill: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "button/button.pill.tsx",
  component: <Component />,
};
