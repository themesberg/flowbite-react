'use client';

import { useState } from 'react';
import { type CodeData } from '~/components/code-demo';
import { Checkbox, Label } from '~/src';

const code = `
'use client';

import { useState } from 'react';
import { Checkbox, Label } from 'flowbite-react';

function Component() {
  const initialData = [
    { id: 'food-1', label: 'Whole wheat bread', checked: false },
    { id: 'food-2', label: 'Fruits', checked: false },
    { id: 'food-3', label: 'Yogurt', checked: false },
  ];

  const [list, setList] = useState(initialData);
  const allChecked = list.every((item) => item.checked);
  const indeterminated = list.some((item) => item.checked) && !allChecked;

  return (
    <div className="flex max-w-md flex-col gap-4" id="checkbox-indeterminate">
      <div className="flex items-center gap-2">
        <Checkbox
          id="all"
          indeterminate={indeterminated}
          checked={allChecked}
          onChange={(event) => {
            const currentChecked = event.target.checked;
            setList((previousData) => previousData.map((value) => ({ ...value, checked: currentChecked })));
          }}
        />
        <Label htmlFor="all">Shopping list</Label>
      </div>
      {list.map((item) => (
        <div className="ml-8 flex items-center gap-2" key={item.id}>
          <Checkbox
            id={item.id}
            checked={item.checked}
            onChange={(event) => {
              const currentChecked = event.target.checked;
              setList((previousData) =>
                previousData.map((value) => (value.id === item.id ? { ...value, checked: currentChecked } : value)),
              );
            }}
          />
          <Label htmlFor={item.id}>{item.label}</Label>
        </div>
      ))}
    </div>
  );
}
`;

function Component() {
  const initialData = [
    { id: 'food-1', label: 'Whole wheat bread', checked: false },
    { id: 'food-2', label: 'Fruits', checked: false },
    { id: 'food-3', label: 'Yogurt', checked: false },
  ];

  const [list, setList] = useState(initialData);
  const allChecked = list.every((item) => item.checked);
  const indeterminated = list.some((item) => item.checked) && !allChecked;

  return (
    <div className="flex max-w-md flex-col gap-4" id="checkbox-indeterminate">
      <div className="flex items-center gap-2">
        <Checkbox
          id="all"
          indeterminate={indeterminated}
          checked={allChecked}
          onChange={(event) => {
            const currentChecked = event.target.checked;
            setList((previousData) => previousData.map((value) => ({ ...value, checked: currentChecked })));
          }}
        />
        <Label htmlFor="all">Shopping list</Label>
      </div>
      {list.map((item) => (
        <div className="ml-8 flex items-center gap-2" key={item.id}>
          <Checkbox
            id={item.id}
            checked={item.checked}
            onChange={(event) => {
              const currentChecked = event.target.checked;
              setList((previousData) =>
                previousData.map((value) => (value.id === item.id ? { ...value, checked: currentChecked } : value)),
              );
            }}
          />
          <Label htmlFor={item.id}>{item.label}</Label>
        </div>
      ))}
    </div>
  );
}

export const checkboxIndeterminate: CodeData = {
  type: 'single',
  code: {
    fileName: 'client',
    language: 'tsx',
    code,
  },
  githubSlug: 'forms/forms.checkboxIndeterminate.tsx',
  component: <Component />,
};
