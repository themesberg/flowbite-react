import { Label, TextInput } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Label, TextInput } from "flowbite-react";

function Component() {
  return (
    <div className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username3" color="success" value="Your name" />
        </div>
        <TextInput
          id="username"
          placeholder="Bonnie Green"
          required
          color="success"
          helperText={
            <>
              <span className="font-medium">Alright!</span> Username available!
            </>
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username4" color="failure" value="Your name" />
        </div>
        <TextInput
          id="username4"
          placeholder="Bonnie Green"
          required
          color="failure"
          helperText={
            <>
              <span className="font-medium">Oops!</span> Username already taken!
            </>
          }
        />
      </div>
    </div>
  );
}
`;

const codeRSC = `
import { Label, TextInput } from "flowbite-react";

function Component() {
  return (
    <div className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username3" color="success" value="Your name" />
        </div>
        <TextInput
          id="username"
          placeholder="Bonnie Green"
          required
          color="success"
          helperText={
            <>
              <span className="font-medium">Alright!</span> Username available!
            </>
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username4" color="failure" value="Your name" />
        </div>
        <TextInput
          id="username4"
          placeholder="Bonnie Green"
          required
          color="failure"
          helperText={
            <>
              <span className="font-medium">Oops!</span> Username already taken!
            </>
          }
        />
      </div>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username3" color="success" value="Your name" />
        </div>
        <TextInput
          id="username"
          placeholder="Bonnie Green"
          required
          color="success"
          helperText={
            <>
              <span className="font-medium">Alright!</span> Username available!
            </>
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username4" color="failure" value="Your name" />
        </div>
        <TextInput
          id="username4"
          placeholder="Bonnie Green"
          required
          color="failure"
          helperText={
            <>
              <span className="font-medium">Oops!</span> Username already taken!
            </>
          }
        />
      </div>
    </div>
  );
}

export const validation: CodeData = {
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
  githubSlug: "forms/forms.validation.tsx",
  component: <Component />,
};
