import type { Meta, StoryFn } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '../Button';
import { useState } from 'react';

export default {
  title: 'Components/Popover',
  component: Popover,
  argTypes: {
    trigger: {
      options: ['click', 'hover'],
      control: { type: 'inline-radio' },
      defaultValue: 'click',
    },
  },
} as Meta;

const Template: StoryFn<typeof Popover> = (args) => {
  return (
    <div className="flex h-96 w-full items-center justify-center">
      <Popover
        {...args}
        content={
          <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
            <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">Popover title</h3>
            </div>
            <div className="px-3 py-2">
              <p>And here's some amazing content. It's very engaging. Right?</p>
            </div>
          </div>
        }
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  placement: 'top',
  onOpenChange: undefined,
  open: undefined,
  children: <Button>Default popover</Button>,
};

export const InitialOpen = Template.bind({});
InitialOpen.args = {
  initialOpen: true,
  placement: 'top',
  onOpenChange: undefined,
  open: undefined,
  children: <Button>Initial open</Button>,
};

const ControlledTemplate: StoryFn<typeof Popover> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-96 w-full items-center justify-center">
      <Popover
        {...args}
        open={open}
        onOpenChange={setOpen}
        content={
          <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
            <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">Popover title</h3>
            </div>
            <div className="space-y-4 px-3 py-2">
              <p>And here's some amazing content. It's very engaging. Right?</p>
              <Button color="gray" onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
          </div>
        }
      >
        <Button onClick={() => setOpen(true)}>Controlled popover</Button>
      </Popover>
    </div>
  );
};

export const Controlled = ControlledTemplate.bind({});
Controlled.args = {
  initialOpen: true,
  placement: 'top',
  onOpenChange: undefined,
  open: undefined,
  children: <Button>Initial open</Button>,
};

// export const Default = Template.bind({});
// Default.args = {
//   content: (
//     <div className="w-64 p-3">
//       <div className="mb-2 flex items-center justify-between">
//         <a href="#">
//           <img
//             className="h-10 w-10 rounded-full"
//             src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
//             alt="Jese Leos"
//           />
//         </a>
//         <div>
//           <button
//             type="button"
//             className="rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Follow
//           </button>
//         </div>
//       </div>
//       <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
//         <a href="#">Jese Leos</a>
//       </p>
//       <p className="mb-3 text-sm font-normal">
//         <a href="#" className="hover:underline">
//           @jeseleos
//         </a>
//       </p>
//       <p className="mb-4 text-sm">
//         Open-source contributor. Building{' '}
//         <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
//           flowbite.com
//         </a>
//         .
//       </p>
//       <ul className="flex text-sm">
//         <li className="me-2">
//           <a href="#" className="hover:underline">
//             <span className="font-semibold text-gray-900 dark:text-white">799</span>
//             <span>Following</span>
//           </a>
//         </li>
//         <li>
//           <a href="#" className="hover:underline">
//             <span className="font-semibold text-gray-900 dark:text-white">3,758</span>
//             <span>Followers</span>
//           </a>
//         </li>
//       </ul>
//     </div>
//   ),
//   initialOpen: true,
//   placement: 'bottom',
//   trigger: 'hover',
//   onOpenChange: undefined,
//   children: <Button>Default tooltip</Button>,
// };
