import { Button } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Button } from "flowbite-react";

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button ghost>Default</Button>
      <Button color="dark" ghost>
        Dark
      </Button>
      <Button color="green" ghost>
        Green
      </Button>
      <Button color="red" ghost>
        Red
      </Button>
      <Button color="yellow" ghost>
        Yellow
      </Button>
      <Button color="purple" ghost>
        Purple
      </Button>
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button ghost>Default</Button>
      <Button color="dark" ghost>
        Dark
      </Button>
      <Button color="green" ghost>
        Green
      </Button>
      <Button color="red" ghost>
        Red
      </Button>
      <Button color="yellow" ghost>
        Yellow
      </Button>
      <Button color="purple" ghost>
        Purple
      </Button>
    </div>
  );
}

export const ghost: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "button/button.ghost.tsx",
  component: <Component />,
};
