import { PhoneInput } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
"use client";

import { PhoneInput } from "flowbite-react";

function Component() {
  return (
    <form className="max-w-sm mx-auto">
      <PhoneInput helperText="Select a phone number that matches the format." />
    </form>
  )
}
`;

const codeRSC = `
function Component() {
  return (
    <form className="max-w-sm mx-auto">
      <PhoneInput helperText="Select a phone number that matches the format." />
    </form>
  )
}
`;

function Component() {
  return (
    <form className="mx-auto max-w-sm">
      <PhoneInput
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required
        placeholder="123-456-7890"
        helperText="Select a phone number that matches the format."
      />
    </form>
  );
}

export const withHelperText: CodeData = {
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
  githubSlug: "/phoneInput/phoneInput.withHelperText.tsx",
  component: <Component />,
};
