import { Button } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Button } from "flowbite-react";

export function Component() {
  return (
    <div className="flex flex-wrap items-start gap-2">
      <Button size="xs" isProcessing>
        Click me!
      </Button>
      <Button size="sm" isProcessing gradientDuoTone="purpleToBlue">
        Click me!
      </Button>
      <Button size="md" isProcessing color="red">
        Click me!
      </Button>
      <Button size="lg" isProcessing pill>
        Click me!
      </Button>
      <Button size="xl" isProcessing outline>
        Click me!
      </Button>
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="flex flex-wrap items-start gap-2">
      <Button size="xs" isProcessing>
        Click me!
      </Button>
      <Button size="sm" isProcessing gradientDuoTone="purpleToBlue">
        Click me!
      </Button>
      <Button size="md" isProcessing color="red">
        Click me!
      </Button>
      <Button size="lg" isProcessing pill>
        Click me!
      </Button>
      <Button size="xl" isProcessing outline>
        Click me!
      </Button>
    </div>
  );
}

export const loading: CodeData = {
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
  ],
  githubSlug: "button/button.loading.tsx",
  component: <Component />,
};
