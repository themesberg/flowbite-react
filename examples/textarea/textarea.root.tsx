import { type CodeData } from '~/components/code-demo';
import { Textarea, Label } from '~/src';

const code = `
'use client';

import { Textarea, Label } from 'flowbite-react';

function Component() {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea id="comment" placeholder="Write your thoughts here" rows={4} />
    </div>
  );
}
`;

const codeRSC = `
import { Textarea, Label } from 'flowbite-react';

function Component() {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea id="comment" placeholder="Write your thoughts here" rows={4} />
    </div>
  );
}
`;

function Component() {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea id="comment" placeholder="Write your thoughts here" rows={4} />
    </div>
  );
}

export const example: CodeData = {
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
    {
      fileName: 'server',
      language: 'tsx',
      code: codeRSC,
    },
  ],
  githubSlug: 'textarea/textarea.example.tsx',
  component: <Component />,
};
