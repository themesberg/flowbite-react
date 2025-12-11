"use client";

import { Button, Datepicker } from "flowbite-react";
import { useState } from "react";
import type { CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Button, Datepicker } from "flowbite-react";
import { useState } from "react";

export function Component() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <Datepicker value={selectedDate} onChange={setSelectedDate} />
      <div className="flex gap-2">
        <Button size="xs" onClick={() => setSelectedDate(new Date())}>
          Set to Today
        </Button>
        <Button size="xs" onClick={() => setSelectedDate(null)}>
          Clear
        </Button>
      </div>
      {selectedDate && (
        <p className="text-sm text-gray-500">
          Selected: {selectedDate.toLocaleDateString()}
        </p>
      )}
    </div>
  );
}
`;

export function Component() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <Datepicker value={selectedDate} onChange={setSelectedDate} />
      <div className="flex gap-2">
        <Button size="xs" onClick={() => setSelectedDate(new Date())}>
          Set to Today
        </Button>
        <Button size="xs" onClick={() => setSelectedDate(null)}>
          Clear
        </Button>
      </div>
      {selectedDate && <p className="text-sm text-gray-500">Selected: {selectedDate.toLocaleDateString()}</p>}
    </div>
  );
}

export const value: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "datepicker/datepicker.value.tsx",
  component: <Component />,
};
