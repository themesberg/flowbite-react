"use client";

import { Alert } from "flowbite-react";
import { useState } from "react";
import type { CodeData } from "~/components/code-demo";

const code = `
"use client";

import { useState } from "react";
import { Alert } from "flowbite-react";

export function Component() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return null;
  }

  return (
    <Alert
      color="success"
      duration={1000}
      onDismiss={() => setIsDismissed(true)}
      timing="ease-in-out"
      transition="transition-opacity"
    >
      <span className="font-medium">Success alert!</span> Dismiss me to see the fade transition.
    </Alert>
  );
}
`;

export function Component() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return null;
  }

  return (
    <Alert
      color="success"
      duration={1000}
      onDismiss={() => setIsDismissed(true)}
      timing="ease-in-out"
      transition="transition-opacity"
    >
      <span className="font-medium">Success alert!</span> Dismiss me to see the fade transition.
    </Alert>
  );
}

export const transition: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "alert/alert.transition.tsx",
  component: <Component />,
};
