import { type CodeData } from '~/components/code-demo';
import { Dropdown } from '~/src';

const code = `
'use client';

import { Dropdown } from 'flowbite-react';

function Component() {
  return (
    <Dropdown dismissOnClick={false} label="Dropdown checkboxes">
        <Dropdown.Header>
          <span className="block text-sm">Accomodation Type</span>
        </Dropdown.Header>
        <Dropdown.ItemCheckbox label="apartment">Apartment</Dropdown.ItemCheckbox>
        <Dropdown.ItemCheckbox label="house">House</Dropdown.ItemCheckbox>
        <Dropdown.ItemCheckbox label="hotel">Hotel</Dropdown.ItemCheckbox>
    </Dropdown>
  );
}
`;

function Component() {
  return (
    <Dropdown dismissOnClick={false} label="Dropdown checkboxes">
      <Dropdown.Header>
        <span className="block text-sm">Accomodation Type</span>
      </Dropdown.Header>
      <Dropdown.ItemCheckbox label="apartment">Apartment</Dropdown.ItemCheckbox>
      <Dropdown.ItemCheckbox label="house">House</Dropdown.ItemCheckbox>
      <Dropdown.ItemCheckbox label="hotel">Hotel</Dropdown.ItemCheckbox>
    </Dropdown>
  );
}

export const checkboxItem: CodeData = {
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
  ],
  githubSlug: 'dropdown/dropdown.itemCheckbox.tsx',
  component: <Component />,
};
