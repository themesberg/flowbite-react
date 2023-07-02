import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Label } from '../Label';
import { TextInput } from '../TextInput';
import type { DrawerProps } from './Drawer';
import { Drawer } from './Drawer';

export default {
  title: 'Components/Drawer',
  component: Drawer,
  args: {
    show: false,
  },
} as Meta;

const Template: Story<DrawerProps> = ({ children, ...rest }): JSX.Element => {
  return (
    <>
      <Button onClick={action('open')}>Toggle drawer</Button>
      <Drawer onClose={action('close')} {...rest}>
        {children}
      </Drawer>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Drawer.Header>Info</Drawer.Header>
      <Drawer.Body>
        <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
          companies around the world are updating their terms of service agreements to comply.
        </div>
        <div className="grid grid-cols-2 gap-4 pt-5">
          <a
            href="#"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            Learn more
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get access{' '}
            <svg
              className="ml-2 h-4 w-4"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </Drawer.Body>
    </>
  ),
};

export const PopUp = Template.bind({});
PopUp.storyName = 'Pop-up drawer';
PopUp.args = {
  children: (
    <Drawer.Body>
      <div className="text-center">
        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Are you sure you want to delete this product?
        </h3>
        <div className="flex justify-center gap-4">
          <Button color="red" onClick={action('close')}>
            Yes, I&apos;m sure
          </Button>
          <Button color="gray" onClick={action('close')}>
            No, cancel
          </Button>
        </div>
      </div>
    </Drawer.Body>
  ),
};

export const FormElements = Template.bind({});
FormElements.storyName = 'Form elements';
FormElements.args = {
  children: (
    <>
      <Drawer.Header />
      <Drawer.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput id="email" placeholder="name@company.com" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput id="password" type="password" required />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <a href="/drawer" className="text-sm text-blue-700 hover:underline dark:text-blue-500">
              Lost Password?
            </a>
          </div>
          <div className="w-full">
            <Button>Log in to your account</Button>
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?&nbsp;
            <a href="/drawer" className="text-blue-700 hover:underline dark:text-blue-500">
              Create account
            </a>
          </div>
        </div>
      </Drawer.Body>
    </>
  ),
};
