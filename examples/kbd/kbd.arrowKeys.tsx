import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowUp } from 'react-icons/md';
import { type CodeData } from '~/app/components/code-demo';
import { Kbd } from '~/src';

const code = `
'use client';

import { Kbd } from 'flowbite-react';
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowUp } from 'react-icons/md';

function Component() {
  return (
    <>
      <Kbd icon={MdKeyboardArrowUp} />
      <Kbd icon={MdKeyboardArrowDown} />
      <Kbd icon={MdKeyboardArrowLeft} />
      <Kbd icon={MdKeyboardArrowRight} />
    </>
  );
}
`;

const codeRSC = `
import { Kbd } from 'flowbite-react';
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowUp } from 'react-icons/md';

function Component() {
  return (
    <>
      <Kbd icon={MdKeyboardArrowUp} />
      <Kbd icon={MdKeyboardArrowDown} />
      <Kbd icon={MdKeyboardArrowLeft} />
      <Kbd icon={MdKeyboardArrowRight} />
    </>
  );
}
`;

function Component() {
  return (
    <>
      <Kbd icon={MdKeyboardArrowUp} />
      <Kbd icon={MdKeyboardArrowDown} />
      <Kbd icon={MdKeyboardArrowLeft} />
      <Kbd icon={MdKeyboardArrowRight} />
    </>
  );
}

export const arrowKeys: CodeData = {
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
  githubSlug: 'kbd/kbd.arrowKeys.tsx',
  component: <Component />,
};
